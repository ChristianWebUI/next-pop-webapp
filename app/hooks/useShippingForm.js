import {
  COUNTRIES,
  QUOTE_SHIPPING_VARIABLES,
  SHIPPING_ADDRESS_TITLE
} from '@/constants/checkout'
import { COP_CURRENCY_CODE } from '@/constants/payment'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { QUOTE_SHIPPING } from '@/graphql-mutations/quoteShipping'
import { GET_LOCATIONS } from '@/graphql-queries/getLocations'
import { toTitleCase } from '@/utils/text'
import { useMutation, useQuery } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFormatter } from 'next-intl'
import { useEffect, useState } from 'react'
import { useController, useForm } from 'react-hook-form'

import * as yup from 'yup'

const schema = yup.object({
  fullName: yup.string().required('Please enter your full name'),
  cellPhone: yup
    .string()
    .matches(
      /^(\([0-9]{3}\)\s[0-9]{3}\s[0-9]{4})$/,
      'Invalid phone number format'
    )
    .required('Please enter your phone number')
    .min(14, 'Phone number is too short')
    .max(14, 'Phone number is too long'),
  address: yup.string().required('Please enter your address'),
  department: yup.string().required('Please type or select your department'),
  city: yup.string().required('Please type or select your city'),
  country: yup.object().shape({
    code: yup.string(),
    prefix: yup.string(),
    flag: yup.string(),
    name: yup.string()
  }),
  isCashOnDelivery: yup.boolean(),
  nitType: yup.string().when('isCashOnDelivery', {
    is: true,
    then: () =>
      yup
        .string()
        .required('Please type or select your NIT type')
        .matches(/^(NIT|CC|CE|TI)$/, 'Invalid NIT type')
  }),
  nit: yup.string().when('isCashOnDelivery', {
    is: true,
    then: () => yup.string().required('Please enter your NIT')
  }),
  deliveryCompany: yup.string()
})

const countriesOptions = COUNTRIES.map(({ name, code, prefix, flag }) => ({
  value: { code, prefix, flag, name },
  label: `${flag} ${name}`
}))

export default function useShippingForm() {
  const { state, dispatch } = useStoreContext()
  const { goToNextStep } = useCheckoutContext()
  const format = useFormatter()
  const [locations, setLocations] = useState({ departments: [], cities: {} })
  const { loading, error } = useQuery(GET_LOCATIONS, {
    onCompleted: (data) => {
      const getLocations = data?.getLocations
      const departments = [
        ...new Set(
          getLocations.map(({ departmentOrStateName }) =>
            toTitleCase(departmentOrStateName)
          )
        )
      ]
      const cities = departments.reduce((acc, department) => {
        acc[department] = getLocations
          .filter(
            (item) => item.departmentOrStateName === department.toUpperCase()
          )
          .map((item) => ({
            locationName: toTitleCase(item.locationName),
            locationCode: item.locationCode
          }))
        return acc
      }, {})
      setLocations({ departments, cities })
    }
  })
  const [
    quoteShipping,
    { loading: loadingQuote, error: errorOnQuote, data: quoteData }
  ] = useMutation(QUOTE_SHIPPING)
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
    watch
  } = useForm({ resolver: yupResolver(schema) })

  const { cart: { shippingInfo } = {} } = state || {}

  // Department
  const {
    field: {
      value: departmentValue,
      onChange: handleDepartmentChange,
      ...restDepartmentField
    }
  } = useController({ name: 'department', control, defaultValue: '' })

  // City
  const {
    field: { value: cityValue, onChange: handleCityChange, ...restCityField }
  } = useController({ name: 'city', control, defaultValue: '' })

  // Country
  const {
    field: {
      value: countryValue,
      onChange: handleCountryChange,
      ...restCountryField
    }
  } = useController({
    name: 'country',
    control,
    defaultValue: { code: '170', prefix: '+57', flag: '🇨🇴', name: 'Colombia' }
  })

  // NIT Type
  const {
    field: {
      value: nitTypeValue,
      onChange: handleNitTypeChange,
      ...restNitTypeField
    }
  } = useController({
    name: 'nitType',
    control,
    defaultValue: 'CC'
  })

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '')
    let formattedValue = ''

    if (input.length <= 10) {
      if (input.length >= 1) {
        formattedValue = `(${input.slice(0, 3)}`
      }

      if (input.length > 3) {
        formattedValue += `) ${input.slice(3, 6)}`
      }

      if (input.length > 6) {
        formattedValue += ` ${input.slice(6, 10)}`
      }
    }

    setValue('cellPhone', formattedValue.slice(0, 14), {
      shouldValidate: true,
      shouldDirty: true
    })
  }

  const onSubmit = (formData) => {
    if (!isCashOnDelivery) {
      formData.shippingCost = quoteData?.quoteShipping.find(
        (companyObj) =>
          companyObj.deliveryCompanyId === formData.deliveryCompany
      ).shippingCost
      delete formData.nitType
      delete formData.nit
    }
    delete formData.country.flag
    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: { ...formData } })
    goToNextStep()
  }

  const departmentsOptions = locations.departments?.map((department) => ({
    value: department,
    label: department
  }))

  const citiesOptions = locations.cities[departmentValue]?.map(
    ({ locationName, locationCode }) => ({
      value: locationCode,
      label: locationName
    })
  )

  const isCashOnDelivery = watch('isCashOnDelivery')

  const nitTypeOptions = [
    { value: 'NIT', label: 'NIT (Número de Identificación Tributaria)' },
    { value: 'CC', label: 'CC (Cédula de Ciudadanía)' },
    { value: 'CE', label: 'CE (Cédula de Extranjería)' },
    { value: 'TI', label: 'TI (Tarjeta de Identidad)' }
  ]

  const handleQuoteShipping = async (e) => {
    e.preventDefault()
    if (!cityValue) return alert('Select or type a city to quote your shipping')
    const { originLocationCode, height, width, length, weight, declaredValue } =
      QUOTE_SHIPPING_VARIABLES
    const quoteShippingInput = {
      originLocationCode,
      destinyLocationCode: cityValue,
      height: height(),
      width: width(),
      length: length(),
      weight: weight(),
      quantity: 1,
      declaredValue: declaredValue(),
      ...(isCashOnDelivery && { saleValue: declaredValue() })
    }
    await quoteShipping({
      variables: { input: { ...quoteShippingInput } }
    })
  }

  const formatCurrency = (cost) => {
    return format.number(cost, {
      style: 'currency',
      currency: COP_CURRENCY_CODE,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    })
  }

  useEffect(() => {
    const isEmptyObject = () => Object.keys(shippingInfo).length === 0
    setValue('fullName', shippingInfo?.fullName || '')
    setValue('cellPhone', shippingInfo?.cellPhone || '')
    setValue('address', shippingInfo?.address || '')
    setValue('department', shippingInfo?.department || '')
    setValue('city', shippingInfo?.city || '')
    setValue(
      'country',
      (!isEmptyObject() && {
        ...shippingInfo?.country,
        flag: COUNTRIES.find((c) => c.code === shippingInfo?.country?.code)
          ?.flag
      }) || {
        code: '170',
        prefix: '+57',
        flag: '🇨🇴',
        name: 'Colombia'
      }
    )
    setValue('isCashOnDelivery', Boolean(shippingInfo?.isCashOnDelivery))
    setValue('nitType', shippingInfo?.nitType || 'CC')
    setValue('nit', shippingInfo?.nit || '')
    setValue('deliveryCompany', shippingInfo?.deliveryCompany || '')
  }, [setValue, shippingInfo])

  return {
    onSubmit: handleSubmit(onSubmit),
    title: SHIPPING_ADDRESS_TITLE,
    loadingFormData: loading,
    errorOnFormData: error,
    register,
    errors,
    departmentsOptions,
    departmentValue,
    handleDepartmentChange,
    restDepartmentField,
    citiesOptions,
    cityValue,
    handleCityChange,
    restCityField,
    countriesOptions,
    countryValue,
    handleCountryChange,
    restCountryField,
    handlePhoneNumberChange,
    isCashOnDelivery,
    nitTypeOptions,
    nitTypeValue,
    handleNitTypeChange,
    restNitTypeField,
    handleQuoteShipping,
    loadingQuote,
    errorOnQuote,
    quoteData,
    formatCurrency
  }
}
