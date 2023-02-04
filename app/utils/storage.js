/**
 * This function takes in an object as an argument and returns a string encoded in base64.
 */
function objectToBase(object) {
  const string = JSON.stringify(object)
  return Buffer.from(string).toString('base64')
}

/**
 * This function takes in a base64 string and returns an object.
 */
function base64ToObject(base64) {
  const string = Buffer.from(base64, 'base64').toString('utf-8')
  return JSON.parse(string)
}

/**
 * storeData() is a function that stores data in localStorage.
 * @param {string} key - The key to store the data under.
 * @param {string|object} value - The value to store. If the value is a string, it will be stored as a base64 encoded string. If the value is an object, it will be stored as a base64 encoded string using objectToBase().
 * @returns {undefined} No return value.
 */
export function storeData(key, value) {
  if (typeof value === 'string') {
    localStorage.setItem(key, Buffer.from(value).toString('base64'))
    return
  }
  localStorage.setItem(key, objectToBase(value))
}

/**
 * getDataFromLocalStorage()
 *
 * This function retrieves data from the local storage based on a given key.
 * It takes in a key as an argument and uses it to retrieve the item from the local storage.
 * If the item exists, it is converted from base64 to an object and returned. Otherwise, null is returned.
 */
export function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key)
  return data ? base64ToObject(data) : null
}
/**
This function clears the localStorage object. It does not take any parameters and does not return any values.
 */
export function clearLocalStorage() {
  localStorage.clear()
}
/**
This function clears an item from localStorage based on the key that is passed in. It takes one parameter, 'key', which is the key of the item to be removed from localStorage. The function uses the removeItem() method of localStorage to remove the item with the specified key.
 */
export function clearLocalStorageByKey(key) {
  localStorage.removeItem(key)
}

export const STORAGE_KEYS = {
  cart: 'cart'
}
