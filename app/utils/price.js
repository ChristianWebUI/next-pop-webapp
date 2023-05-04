import { COP_CURRENCY_CODE } from '@/constants/payment'

export const roundTwoDecimals = (num) =>
  Math.round(num * 100 + Number.EPSILON) / 100

export const formatCurrencyInCop = (format, amount) =>
  format.number(amount, {
    style: 'currency',
    currency: COP_CURRENCY_CODE,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true
  })
