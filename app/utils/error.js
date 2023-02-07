export const getErrorMessage = (err) =>
  err.response?.data?.message ? err.response.data.message : err.message
