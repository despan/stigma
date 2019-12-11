import Stigma from '.'

const KEY = 'STIGMA'

const { recover } = Stigma(KEY)

recover().catch(() => {}) // fail silently
