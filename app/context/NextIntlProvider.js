'use client'
import { NextIntlProvider } from 'next-intl'

export default function IntlProvider({ children }) {
  return (
    <NextIntlProvider locale="es-CO" messages={{}}>
      {children}
    </NextIntlProvider>
  )
}
