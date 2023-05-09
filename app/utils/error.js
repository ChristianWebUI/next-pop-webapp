export const getErrorMessage = (err) => {
  console.log(err)
  return err.response?.data?.message ? err.response.data.message : err.message
}
