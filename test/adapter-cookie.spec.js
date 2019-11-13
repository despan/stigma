import test from 'ava'

import MockCookie from 'mock-cookie'

import { Cookie } from '../src/adapters'

test.beforeEach(t => {
  // mock cookies
  const document = new MockCookie.Document()

  global.window = { document }
  global.document = document

  // keep reference in context
  t.context = document
})

test.serial('put', async t => {
  const { put } = Cookie

  // check initial
  t.is(t.context.cookie, '')

  // set
  put('a', 'x')
  put('b', 'y')
  // update
  put('b', 'z')

  // check result
  t.is(t.context.cookie, 'a=x; b=z')
})

test.serial('get', async t => {
  const { get } = Cookie

  // predefine cookie
  t.context.cookie = 'a=x;'
  t.context.cookie = 'b=y;'

  await get('a').then()

  t.is(await get('a'), 'x')
  t.is(await get('b'), 'y')
  t.is(await get('c'), undefined)
})
