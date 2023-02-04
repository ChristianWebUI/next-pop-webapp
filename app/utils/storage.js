function objectToBase(object) {
  const string = JSON.stringify(object)
  return Buffer.from(string).toString('base64')
}

function base64ToObject(base64) {
  const string = Buffer.from(base64, 'base64').toString('utf-8')
  return JSON.parse(string)
}

export function storeData(key, value) {
  if (typeof value === 'string') {
    localStorage.setItem(key, Buffer.from(value).toString('base64'))
    return
  }
  localStorage.setItem(key, objectToBase(value))
}

export function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key)
  return data ? base64ToObject(data) : null
}

export function clearLocalStorage() {
  localStorage.clear()
}

export function clearLocalStorageByKey(key) {
  localStorage.removeItem(key)
}

export const STORAGE_KEYS = {
  cart: 'cart'
}
