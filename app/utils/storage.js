export function objectToBase64(object) {
  const string = JSON.stringify(object)
  return Buffer.from(string).toString('base64')
}

export function base64ToObject(base64) {
  const string = Buffer.from(base64, 'base64').toString('utf-8')
  return JSON.parse(string)
}

export const STORAGE_KEYS = {
  cart: 'cart'
}
