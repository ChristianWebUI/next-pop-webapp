export const toTitleCase = (str) =>
  str.replace(
    /\b[\p{L}\p{M}]+/gu,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )

export const getPlainPhoneNumber = (formattedPhoneNumber) =>
  formattedPhoneNumber.replace(/\D/g, '') // Remove all non-numeric characters
