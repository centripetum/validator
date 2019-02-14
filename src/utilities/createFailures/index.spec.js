import { Just, Nothing } from 'sanctuary'

import createFailures from './'

const errorType = 'ERROR_MESSAGE'
const value = Just('test')
const testValue = Nothing

describe('utilities:createFailures', () => {
  it('returns an error with a testValue when provided', () => {
    expect(createFailures(errorType, value, testValue)).toEqual({
      value: Just('test'),
      failures: [{ errorType: 'ERROR_MESSAGE', testValue: Nothing }]
    })
  })

  it('returns an error without a testValue when not provided', () => {
    expect(createFailures(errorType, value)).toEqual({
      value: Just('test'),
      failures: [{ errorType: 'ERROR_MESSAGE' }]
    })
  })
})
