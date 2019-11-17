const adapters = require('./adapters')

function main (key) {
  function put (value) {
    const setter = adapter =>
      adapter
        .put(key, value)
        .catch(() => undefined) // fail silently

    const ps = Object
      .values(adapters)
      .map(setter)

    return Promise
      .all(ps)
      .then(() => undefined)
  }

  function get () {
    const getter = adapter =>
      adapter
        .get(key)
        .catch(() => undefined) // fail silently

    const ps = Object
      .values(adapters)
      .map(getter)

    const or = (a, b) => a || b
    const recover = results => results.reduce(or, undefined)

    return Promise
      .all(ps)
      .then(recover)
  }

  function has () {
    const isNil = value => value !== undefined
    return get()
      .then(isNil)
  }

  function recover () {
    return get()
      .then(put)
  }

  return {
    put,
    get,
    has,
    recover
  }
}

module.exports = main
