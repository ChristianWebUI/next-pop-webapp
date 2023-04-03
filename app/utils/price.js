export const roundTwoDecimals = (num) =>
  Math.round(num * 100 + Number.EPSILON) / 100
