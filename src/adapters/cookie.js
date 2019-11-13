const Cookie = require('js-cookie')

/**
 * Set cookie
 *
 * @param {string} key
 * @param {string} value
 *
 * @return {Promise}
 */

function put (key, value) {
  try {
    Cookie.set(key, value)
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * Get cookie
 *
 * @param {string} key
 *
 * @return {Promise<string>}
 */

function get (key) {
  try {
    const value = Cookie.get(key)
    return Promise.resolve(value)
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  put,
  get
}
