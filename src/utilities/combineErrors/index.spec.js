import { Just, Left, Nothing } from 'sanctuary'

import { INVALID_URL, IS_NULL, NOT_A_STRING } from '../../errorTypes'

import combineErrors from './'

const err1 = { errorType: INVALID_URL, value: Just('xyz') }
const err2 = { errorType: IS_NULL, value: Nothing }
const err3 = { errorType: NOT_A_STRING, value: Just(5) }

describe('utilities:combineErrors', () => {
  it('handles a single error', () => {
    expect(combineErrors([Left(err1)])).toMatchObject(Left([err1]))
  })

  it('handles multiple errors', () => {
    expect(combineErrors([Left(err1), Left(err2)])).toMatchObject(
      Left([err1, err2])
    )
  })

  it('handles duplicate errors', () => {
    expect(combineErrors([Left(err1), Left(err2), Left(err1)])).toMatchObject(
      Left([err1, err2])
    )
  })

  it('handles nested errors', () => {
    expect(
      combineErrors([Left([err1]), Left([err2, err3]), Left([err2])])
    ).toMatchObject(Left([err1, err2, err3]))
  })
})
