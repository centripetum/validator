import { Just, Nothing } from 'sanctuary'

import createFailures from './'

const errorType = 'ERROR_MESSAGE'
const value = Just('test')
const testValue = Nothing

describe('utilities:createFailures', () => {
  it('returns an error with a testValue when provided', () => {
    expect(createFailures(errorType, value, testValue)).toEqual({
      errorType,
      value,
      testValue
    })
  })

  it('returns an error without a testValue when not provided', () => {
    expect(createFailures(errorType, value)).toEqual({
      errorType,
      value
    })
  })
})
