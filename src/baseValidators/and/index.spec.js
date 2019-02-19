import { Just, Nothing, Right, Left } from 'sanctuary'

import createFailures from '../../utilities/createFailures'
import and from './'

const value = Just(1)
const testValue = Just('test')
const success = v => Right(v)
const failure = e => v => Left(createFailures('FAILURE_' + e, v, testValue))

describe('baseValidators:and', () => {
  it(`returns a Right(Nothing) by default`, () => {
    expect(and([success, success])()).toEqual(Right(Nothing))
  })

  it(`returns a Right(value) for and([success, success])(value)`, () => {
    expect(and([success, success])(value)).toEqual(Right(value))
  })

  it(`returns a Right(value) for and([success, success, success])(value)`, () => {
    expect(and([success, success, success])(value)).toEqual(Right(value))
  })

  it(`returns a Left for failure and success`, () => {
    expect(and([failure('x'), success])(value)).toEqual(
      Left({
        failures: [{ errorType: 'FAILURE_x', testValue: Just('test') }],
        value: Just(1)
      })
    )
  })

  it(`returns a Left for success and failure`, () => {
    expect(and([success, failure('y')])(value)).toEqual(
      Left({
        failures: [{ errorType: 'FAILURE_y', testValue: Just('test') }],
        value: Just(1)
      })
    )
  })

  it(`returns a combined Left for failure and failure`, () => {
    expect(and([failure('x'), failure('y')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') }
        ],
        value: Just(1)
      })
    )
  })

  it(`returns a combined Left for failure and failure and failure`, () => {
    expect(and([failure('x'), failure('y'), failure('z')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') },
          { errorType: 'FAILURE_z', testValue: Just('test') }
        ],
        value: Just(1)
      })
    )
  })
})
