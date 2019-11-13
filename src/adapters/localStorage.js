/**
 * Set local storage item
 *
 * @param {string} key
 * @param {string} value
 *
 * @return {Promise}
 */

function put (key, value) {
  const { localStorage } = window

  try {
    localStorage.setItem(key, value)
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * Get local storage item
 *
 * @param {string} key
 *
 * @return {Promise<string>}
 */

function get (key) {
  const { localStorage } = window

  try {
    const value = localStorage.getItem(key)
    return Promise.resolve(value || undefined)
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  put,
  get
}
