import test from 'ava'

import { sessionStorage as Adapter } from '../src/adapters'

test.beforeEach(t => {
  // mock sessionStorage
  // keep reference in context
  t.context = require('./helpers/mock-sessionStorage')
})

test.serial('put', async t => {
  const { put } = Adapter
  const { sessionStorage } = window

  // set
  put('a', 'x')
  put('b', 'y')
  // update
  put('b', 'z')

  // check result
  t.is(sessionStorage.getItem('a'), 'x')
  t.is(sessionStorage.getItem('b'), 'z')
})

test.serial('get', async t => {
  const { get } = Adapter
  const { sessionStorage } = window

  // predefine cookie
  sessionStorage.setItem('a', 'x')
  sessionStorage.setItem('b', 'y')

  t.is(await get('a'), 'x')
  t.is(await get('b'), 'y')
  t.is(await get('c'), undefined)
})
