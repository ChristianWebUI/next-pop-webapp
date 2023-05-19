/* eslint-disable multiline-ternary */
'use client'
import DeliveryCompanySelector from '@/components/DeliveryCompanySelector'
import {
  ADDRESS_LABEL,
  BACK_BUTTON_TITLE,
  CASH_ON_DELIVERY_LABEL,
  FULLNAME_LABEL,
  NEXT_BUTTON_TITLE,
  NIT_LABEL,
  PHONE_NUMBER_LABEL,
  SHIPPING_ADDRESS_TITLE,
  dummyCities,
  dummyDepartments,
  dummyNitTypeOptions
} from '@/constants/checkout'
import data from '@/utils/data'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/solid'
import React from 'react'
import Select, { components } from 'react-select'

const { ValueContainer, Placeholder } = components

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  )
}

export default function ShippingForm() {
  return (
    <section
      id="shipping-form"
      className="flex flex-col m-3 p-[30px_10px] md:m-8 lg:px-20 lg:py-10 md:p-10 border border-solid border-input-border-color"
    >
      <h2 className="w-full flex items-center justify-center mb-4">
        {SHIPPING_ADDRESS_TITLE}
      </h2>
      <form className="relative flex lg:flex-nowrap flex-wrap justify-between items-start">
        {/* Left Panel */}
        <div className="flex justify-between md:p-8 p-4 lg:w-6/12 w-full flex-wrap lg:mb-16">
          {/* Full Name & Cell Phone */}
          <div className="flex justify-between w-full gap-8 my-8 flex-col md:flex-row">
            {/* Full Name */}
            <div className="relative md:w-6/12 w-full">
              <input
                className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
                type="text"
                id="fullName"
                required
              />
              <label
                className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
                htmlFor="fullName"
              >
                {FULLNAME_LABEL}
              </label>
            </div>
            {/* Cell Phone */}
            <div className="relative md:w-6/12 w-full">
              <input
                className="peer py-3 pr-4 pl-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full valid:pl-16 focus:pl-16 input-transition"
                type="text"
                id="cellPhone"
                required
              />
              <label
                className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
                htmlFor="cellPhone"
              >
                {PHONE_NUMBER_LABEL}
              </label>
              <span className="absolute bottom-3 left-4 text-sm cursor-none hidden peer-focus:block peer-valid:block">
                {'🇨🇴+57'}
              </span>
            </div>
          </div>
          {/* Address */}
          <div className="relative w-full my-8">
            <input
              className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full"
              type="text"
              id="address"
              required
            />
            <label
              className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none"
              htmlFor="address"
            >
              {ADDRESS_LABEL}
            </label>
          </div>
          {/* Department & City */}
          <div className="flex justify-between w-full gap-8 my-8 flex-col md:flex-row">
            {/* Department */}
            <div className="relative md:w-6/12 w-full">
              <Select
                classNamePrefix="select"
                id="department"
                name="department"
                isClearable
                placeholder="Department"
                components={{ ValueContainer: CustomValueContainer }}
                options={dummyDepartments}
                styles={{
                  control: (base) => ({
                    ...base,
                    color: '#222',
                    outline: '0',
                    boxShadow: 'none',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    width: '100%',
                    borderRadius: '0',
                    borderWidth: '0',
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e1e1e1',
                    '&:hover': { borderColor: '#e1e1e1' }
                  }),
                  valueContainer: (provided, state) => ({
                    ...provided,
                    overflow: 'visible',
                    padding: '0.75rem 1rem'
                  }),
                  input: (provided, state) => ({
                    ...provided,
                    margin: '0',
                    padding: '0'
                  }),
                  dropdownIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  clearIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  indicatorSeparator: (provided, state) => ({}),
                  placeholder: (provided, state) => ({
                    ...provided,
                    color: '#222',
                    position: 'absolute',
                    bottom:
                      state.hasValue || state.selectProps.inputValue
                        ? '1.5rem'
                        : '0',
                    transition: 'bottom 0.1s, font-size 0.1s',
                    fontSize:
                      (state.hasValue || state.selectProps.inputValue) && 10
                  })
                }}
              />
            </div>
            {/* City */}
            <div className="relative md:w-6/12 w-full">
              <Select
                classNamePrefix="select"
                id="city"
                name="city"
                isClearable
                placeholder="City"
                components={{ ValueContainer: CustomValueContainer }}
                options={dummyCities}
                styles={{
                  control: (base) => ({
                    ...base,
                    color: '#222',
                    outline: '0',
                    boxShadow: 'none',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    width: '100%',
                    borderRadius: '0',
                    borderWidth: '0',
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e1e1e1',
                    '&:hover': { borderColor: '#e1e1e1' }
                  }),
                  valueContainer: (provided, state) => ({
                    ...provided,
                    overflow: 'visible',
                    padding: '0.75rem 1rem'
                  }),
                  input: (provided, state) => ({
                    ...provided,
                    margin: '0',
                    padding: '0'
                  }),
                  dropdownIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  clearIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  indicatorSeparator: (provided, state) => ({}),
                  placeholder: (provided, state) => ({
                    ...provided,
                    color: '#222',
                    position: 'absolute',
                    bottom:
                      state.hasValue || state.selectProps.inputValue
                        ? '1.5rem'
                        : '0',
                    transition: 'bottom 0.1s, font-size 0.1s',
                    fontSize:
                      (state.hasValue || state.selectProps.inputValue) && 10
                  })
                }}
              />
            </div>
          </div>
          {/* Is Cash On Delivery */}
          <div className="relative w-full mt-8">
            <div className="toggle-switch">
              <input
                type="checkbox"
                name="isCashOnDelivery"
                className="toggle-switch-checkbox"
                id="isCashOnDelivery"
              />
              <label
                className="toggle-switch-label"
                tabIndex={1}
                htmlFor="isCashOnDelivery"
              >
                <span
                  className="toggle-switch-inner"
                  data-yes={'Sí'}
                  data-no={'No'}
                  tabIndex={-1}
                />
                <span className="toggle-switch-switch" tabIndex={-1} />
              </label>
            </div>
            <label
              htmlFor="isCashOnDelivery"
              className="md:text-sm text-[11px]"
            >
              {CASH_ON_DELIVERY_LABEL}
            </label>
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex justify-between md:p-8 p-4 lg:w-6/12 w-full flex-wrap mb-16">
          {/* NIT & NIT Type */}
          <div className="flex justify-between w-full gap-8 my-8 flex-col md:flex-row">
            {/* NIT */}
            <div className="relative md:w-6/12 w-full">
              <input
                type="text"
                name="nit"
                id="nit"
                className="peer py-3 px-4 outline-none border-0 border-b border-solid border-input-border-color text-sm w-full disabled:bg-transparent disabled:cursor-not-allowed"
                required
                disabled
              />
              <label
                htmlFor="nit"
                className="absolute bottom-3 left-4 text-sm w-full cursor-text label-transition peer-disabled:text-input-border-color peer-disabled:cursor-not-allowed peer-valid:text-[10px] peer-valid:bottom-12 peer-valid:pointer-events-none peer-focus:text-[10px] peer-focus:bottom-12 peer-focus:pointer-events-none"
              >
                {NIT_LABEL}
              </label>
            </div>
            {/* NIT Type */}
            <div className="relative md:w-6/12 w-full">
              <Select
                classNamePrefix="select"
                id="nitType"
                name="nitType"
                isClearable
                isDisabled
                placeholder="ID Type"
                components={{ ValueContainer: CustomValueContainer }}
                options={dummyNitTypeOptions}
                styles={{
                  control: (base, { isDisabled }) => ({
                    ...base,
                    color: '#222',
                    outline: '0',
                    boxShadow: 'none',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    width: '100%',
                    borderRadius: '0',
                    borderWidth: '0',
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e1e1e1',
                    backgroundColor: isDisabled && 'transparent',
                    '&:hover': { borderColor: '#e1e1e1' }
                  }),
                  valueContainer: (provided, state) => ({
                    ...provided,
                    overflow: 'visible',
                    padding: '0.75rem 1rem'
                  }),
                  input: (provided, state) => ({
                    ...provided,
                    margin: '0',
                    padding: '0'
                  }),
                  dropdownIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  clearIndicator: (provided, state) => ({
                    ...provided,
                    color: '#e1e1e1',
                    '&:hover': { color: '#088178' }
                  }),
                  indicatorSeparator: (provided, state) => ({}),
                  placeholder: (
                    provided,
                    { isDisabled, hasValue, selectProps }
                  ) => ({
                    ...provided,
                    color: !isDisabled ? '#222' : '#e1e1e1',
                    position: 'absolute',
                    bottom: hasValue || selectProps.inputValue ? '1.5rem' : '0',
                    transition: 'bottom 0.1s, font-size 0.1s',
                    fontSize: (hasValue || selectProps.inputValue) && 10
                  })
                }}
              />
            </div>
          </div>
          {/* State message of delivery companies */}
          <p className="text-xs mx-auto animate-bounce text-center md:text-start">
            Selecciona la empresa transportadora de tu preferencia
          </p>
          {/* Delivery Companies */}
          <div className="w-full my-3 flex flex-wrap justify-between lg:gap-3 gap-2">
            {data.deliveryCompanies.map(
              ({
                deliveryCompanyName,
                deliveryCompanyId,
                deliveryCompanyImgUrl,
                score,
                shippingCost
              }) => (
                <DeliveryCompanySelector
                  key={deliveryCompanyId}
                  deliveryCompanyName={deliveryCompanyName}
                  deliveryCompanyId={deliveryCompanyId}
                  deliveryCompanyImgUrl={deliveryCompanyImgUrl}
                  score={score}
                  shippingCost={shippingCost}
                />
              )
            )}
          </div>
        </div>
        {/* Button Back */}
        <button
          className="flex items-center justify-center gap-2 absolute bottom-0 md:left-8 left-4 text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
          type="button"
        >
          <ArrowLongLeftIcon className="w-4 h-4 text-white animate-pulse" />
          {BACK_BUTTON_TITLE}
        </button>
        {/* Button Next */}
        <button
          className="flex items-center justify-center gap-2 absolute bottom-0 md:right-8 right-4 text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
          type="submit"
        >
          {NEXT_BUTTON_TITLE}
          <ArrowLongRightIcon className="w-4 h-4 text-white animate-pulse" />
        </button>
      </form>
    </section>
  )
}
