import createError from './'
import { Just, Nothing } from 'sanctuary'

const errorType = 'ERROR_MESSAGE'
const value = Just('test')
const testValue = Nothing

describe('utilities:createError', () => {
  it('returns an error with a testValue when provided', () => {
    expect(createError(errorType, value, testValue)).toEqual({
      errorType,
      value,
      testValue
    })
  })

  it('returns an error without a testValue when not provided', () => {
    expect(createError(errorType, value)).toEqual({
      errorType,
      value
    })
  })
})
