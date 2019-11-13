import 'mock-local-storage'

const { localStorage } = global
global.window = { localStorage }

// expose handler
module.exports = { localStorage }
