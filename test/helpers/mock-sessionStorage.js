import 'mock-local-storage'

const { sessionStorage } = global
global.window = { sessionStorage }

// expose handler
module.exports = { sessionStorage }
