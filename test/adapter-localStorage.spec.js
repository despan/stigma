import test from 'ava'

import 'mock-local-storage'

import { localStorage as Adapter } from '../src/adapters'

test.beforeEach(t => {
  // mock cookies
  global.window = {}
  global.window.localStorage = global.localStorage

  // keep reference in context
  t.context = global.window
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
