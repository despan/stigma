/**
 * Set session storage item
 *
 * @param {string} key
 * @param {string} value
 *
 * @return {Promise}
 */

function put (key, value) {
  const { sessionStorage } = window

  try {
    sessionStorage.setItem(key, value)
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * Get session storage item
 *
 * @param {string} key
 *
 * @return {Promise<string>}
 */

function get (key) {
  const { sessionStorage } = window

  try {
    const value = sessionStorage.getItem(key)
    return Promise.resolve(value || undefined)
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  put,
  get
}
