import test from 'ava'

import Stigma from '..'

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
