/* eslint-disable multiline-ternary */
'use client'
import {
  ADDRESS_LABEL,
  CASH_ON_DELIVERY_LABEL,
  CITY_LABEL,
  COUNTRY_LABEL,
  DEPARTMENT_LABEL,
  FULLNAME_LABEL,
  NIT_LABEL,
  NIT_TYPE_LABEL,
  PHONE_NUMBER_LABEL,
  QUOTE_SHIPPING_LABEL
} from '@/constants/checkout'
import useShippingForm from '@/hooks/useShippingForm'
import { getErrorMessage } from '@/utils/error'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Select from 'react-select'

export default function ShippingForm({ optionLabels = ['Yes', 'No'] }) {
  const {
    title,
    onSubmit,
    loadingFormData,
    errorOnFormData,
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
  } = useShippingForm()
  if (loadingFormData) return <div>Loading form...</div>
  if (errorOnFormData) return <div>{getErrorMessage(errorOnFormData)}</div>
  const COLOMBIA_CODE = '170'
  const internationalShipping = countryValue?.code !== COLOMBIA_CODE
  return (
    <div className="mx-auto max-w-screen-md">
      <h1 className="mb-4 text-xl flex justify-center items-center">{title}</h1>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-4 justify-between"
      >
        <div className="col-span-1">
          <div className="mb-4">
            <label htmlFor="fullName">{FULLNAME_LABEL}</label>
            <input
              className="shipping-input-group w-full"
              id="fullName"
              autoFocus
              {...register('fullName')}
            />
            {errors.fullName && (
              <div className="text-red-500">{errors.fullName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cellPhone">{PHONE_NUMBER_LABEL}</label>
            <div className="flex gap-1">
              <span className="shipping-input-group inline-flex items-center px-3 bg-gray-50 text-gray-500">{`${countryValue?.flag}${countryValue?.prefix}`}</span>
              <input
                className="shipping-input-group flex-1 block w-full"
                id="cellPhone"
                name="cellPhone"
                {...register('cellPhone')}
                onChange={handlePhoneNumberChange}
                placeholder="(XXX) XXX XXXX"
                autoFocus
              />
            </div>
            {errors.cellPhone && (
              <div className="text-red-500">{errors.cellPhone.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address">{ADDRESS_LABEL}</label>
            <input
              className="shipping-input-group w-full"
              id="address"
              autoFocus
              {...register('address')}
            />
            {errors.address && (
              <div className="text-red-500">{errors.address.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="department">{DEPARTMENT_LABEL}</label>
            <Select
              id="department"
              className="w-full"
              placeholder="Select a department"
              isClearable
              isDisabled={Boolean(internationalShipping)}
              options={departmentsOptions}
              value={
                departmentValue
                  ? departmentsOptions.find((d) => d.value === departmentValue)
                  : departmentValue
              }
              onChange={(option) => {
                handleCityChange('')
                handleDepartmentChange(option ? option.value : option)
              }}
              {...restDepartmentField}
            />
            {errors.department && (
              <div className="text-red-500">{errors.department.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="city">{CITY_LABEL}</label>
            <Select
              id="city"
              className="w-full"
              placeholder="Select a city"
              isClearable
              isDisabled={
                Boolean(!departmentValue) || Boolean(internationalShipping)
              }
              options={citiesOptions}
              value={
                citiesOptions?.find((c) => c.value === cityValue) || {
                  value: '',
                  label: ''
                }
              }
              onChange={(option) =>
                handleCityChange(option ? option.value : option)
              }
              {...restCityField}
            />
            {errors.city && (
              <div className="text-red-500">{errors.city.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="country">{COUNTRY_LABEL}</label>
            <Select
              id="country"
              className="w-full"
              placeholder="Select your country"
              options={countriesOptions}
              defaultValue={{
                code: '170',
                prefix: '+57',
                flag: '🇨🇴',
                name: 'Colombia'
              }}
              value={
                countryValue
                  ? countriesOptions.find(
                      (c) => c.value.code === countryValue.code
                    )
                  : countryValue
              }
              onChange={(option) => {
                if (option.value.code !== COLOMBIA_CODE) {
                  handleCityChange('international')
                  handleDepartmentChange('international')
                }
                handleCountryChange(option ? option.value : option)
              }}
              {...restCountryField}
            />
            {errors.country && (
              <div className="text-red-500">{errors.country.message}</div>
            )}
          </div>
          <div className="mb-4">
            <div className="toggle-switch">
              <input
                type="checkbox"
                name="isCashOnDelivery"
                className="toggle-switch-checkbox"
                id="isCashOnDelivery"
                {...register('isCashOnDelivery')}
              />
              <label
                className="toggle-switch-label"
                tabIndex={1}
                htmlFor="isCashOnDelivery"
              >
                <span
                  className="toggle-switch-inner"
                  data-yes={optionLabels[0]}
                  data-no={optionLabels[1]}
                  tabIndex={-1}
                />
                <span className="toggle-switch-switch" tabIndex={-1} />
              </label>
            </div>
            <label htmlFor="isCashOnDelivery">{CASH_ON_DELIVERY_LABEL}</label>
          </div>
        </div>
        <div className="col-span-1">
          {isCashOnDelivery && (
            <>
              <div className="mb-4">
                <label htmlFor="nitType">{NIT_TYPE_LABEL}</label>
                <Select
                  id="nitType"
                  className="w-full"
                  placeholder="Select your type of ID"
                  isClearable
                  isSearchable={false}
                  options={nitTypeOptions}
                  defaultValue={{
                    value: 'CC',
                    label: 'CC (Cédula de Ciudadanía)'
                  }}
                  value={
                    nitTypeValue
                      ? nitTypeOptions.find((nt) => nt.value === nitTypeValue)
                      : nitTypeValue
                  }
                  onChange={(option) =>
                    handleNitTypeChange(option ? option.value : option)
                  }
                  {...restNitTypeField}
                />
                {errors.nitType && (
                  <div className="text-red-500">{errors.nitType.message}</div>
                )}
              </div>
              <div>
                <label htmlFor="nit">{NIT_LABEL}</label>
                <input
                  className="shipping-input-group w-full"
                  id="nit"
                  autoFocus
                  {...register('nit')}
                />
                {errors.nit && (
                  <div className="text-red-500">{errors.nit.message}</div>
                )}
              </div>
            </>
          )}
          <div className="pt-6 flex justify-center">
            <button
              type="button"
              className="primary-button"
              onClick={handleQuoteShipping}
            >
              {QUOTE_SHIPPING_LABEL}
            </button>
          </div>
          <div className="mb-4">
            {loadingQuote && <div>Loading quotes options...</div>}
            {errorOnQuote && <div>{getErrorMessage(errorOnQuote)}</div>}
            {quoteData && (
              <div className="flex flex-col gap-2 w-full my-4">
                {quoteData?.quoteShipping.map(
                  ({
                    deliveryCompanyId,
                    deliveryCompanyName,
                    deliveryCompanyImgUrl,
                    shippingCost,
                    score
                  }) => (
                    <div key={deliveryCompanyId} className="relative">
                      <input
                        type="radio"
                        name={deliveryCompanyName}
                        id={deliveryCompanyName}
                        className="hidden peer"
                        {...register('deliveryCompany')}
                        value={deliveryCompanyId}
                      />
                      <label
                        htmlFor={deliveryCompanyName}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-md hover:bg-opacity-75 peer-checked:bg-indigo-700 peer-checked:text-white cursor-pointer transition"
                      >
                        <Image
                          src={deliveryCompanyImgUrl}
                          alt="company image"
                          width={50}
                          height={50}
                          quality={100}
                          priority
                          className="object-cover rounded-full"
                        />
                        <div>
                          <h6 className="text-base">{deliveryCompanyName}</h6>
                          {score && (
                            <span className="flex text-sm opacity-60 gap-1">
                              <StarIcon className="h5 w-5 text-yellow-500" />
                              {score}
                            </span>
                          )}
                        </div>
                        <h6 className="ml-auto mr-10">
                          {formatCurrency(shippingCost)}
                        </h6>
                      </label>
                      <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-indigo-500 scale-0 peer-checked:scale-100 transition delay-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5 text-white my-auto mx-auto"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div className="mb-4 flex justify-between">
          <button type="submit" className="primary-button">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}
