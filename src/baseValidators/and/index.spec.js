import { Just, Left, Nothing, Right } from 'sanctuary'

import and from './'
import createFailures from '../../utilities/createFailures'

const value = Just(1)
const testValue = Just('test')
const success = v => Right(v)
const failure = e => v => Left(createFailures('FAILURE_' + e, v, testValue))

describe('baseValidators:and', () => {
  it(`returns Right(value) when no validators passed`, () => {
    expect(and([])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for success alone`, () => {
    expect(and([success])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for success AND success`, () => {
    expect(and([success, success])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for success AND success AND success`, () => {
    expect(and([success, success, success])(value)).toEqual(Right(value))
  })

  it(`returns a Left(error) for success AND failure`, () => {
    expect(and([success, failure('y')])(value)).toEqual(
      Left({
        failures: [{ errorType: 'FAILURE_y', testValue: Just('test') }],
        value
      })
    )
  })

  it(`returns a Left(error) for failure AND success`, () => {
    expect(and([failure('x'), success])(value)).toEqual(
      Left({
        failures: [{ errorType: 'FAILURE_x', testValue: Just('test') }],
        value
      })
    )
  })

  it(`returns a Left(error) for failure`, () => {
    expect(and([failure('x')])(value)).toEqual(
      Left({
        failures: [{ errorType: 'FAILURE_x', testValue: Just('test') }],
        value
      })
    )
  })

  it(`returns a Left(combined errors) for failure AND failure`, () => {
    expect(and([failure('x'), failure('y')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') }
        ],
        value
      })
    )
  })

  it(`returns a Left(combined errors) for failure AND failure AND failure`, () => {
    expect(and([failure('x'), failure('y'), failure('z')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') },
          { errorType: 'FAILURE_z', testValue: Just('test') }
        ],
        value
      })
    )
  })
})
