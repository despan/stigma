import { Document } from 'mock-cookie'

// init document mock w/ cookie support
const document = new Document()

// set global variables
global.window = { document }
global.document = document

// expose document handler
module.exports = document
