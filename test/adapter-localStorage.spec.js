import test from 'ava'

import { localStorage as Adapter } from '../src/adapters'

test.beforeEach(t => {
  // mock localStorage
  // keep reference in context
  t.context = require('./helpers/mock-localStorage')
})

test.serial('put', async t => {
  const { put } = Adapter
  const { localStorage } = window

  // set
  put('a', 'x')
  put('b', 'y')
  // update
  put('b', 'z')

  // check result
  t.is(localStorage.getItem('a'), 'x')
  t.is(localStorage.getItem('b'), 'z')
})

test.serial('get', async t => {
  const { get } = Adapter
  const { localStorage } = window

  // predefine cookie
  localStorage.setItem('a', 'x')
  localStorage.setItem('b', 'y')

  t.is(await get('a'), 'x')
  t.is(await get('b'), 'y')
  t.is(await get('c'), undefined)
})
