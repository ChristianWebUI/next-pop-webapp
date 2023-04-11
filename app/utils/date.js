export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString)
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
  const date = dateTime.toLocaleDateString(undefined, options)
  const time = dateTime.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  return `${date} at ${time}`
}
