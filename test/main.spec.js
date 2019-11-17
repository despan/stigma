import test from 'ava'

import Stigma from '..'

test.serial('has - cookie only', async t => {
  const document = require('./helpers/mock-cookie')

  const { has } = Stigma('abc')

  t.false(await has())

  document.cookie = 'abc=xxx;'

  t.true(await has())
})

test.serial('put - cookie only', async t => {
  const document = require('./helpers/mock-cookie')

  const { put } = Stigma('abc')

  await t.notThrowsAsync(() => put('xxx'))

  // check results
  t.is(document.cookie, 'abc=xxx')
})

test.serial('get - cookie only', async t => {
  const document = require('./helpers/mock-cookie')

  const { get } = Stigma('abc')

  document.cookie = 'abc=xxx;'

  t.is(await get(), 'xxx')
})

test.serial('recover - cookie only', async t => {
  const { recover } = Stigma('abc')

  t.is(typeof recover, 'function')
})
