import { Just, Left, Nothing, Right } from 'sanctuary'

import createFailures from '../../utilities/createFailures'
import or from './'

const value = Just(1)
const testValue = Just('test')
const success = v => Right(v)
const failure = e => v => Left(createFailures('FAILURE_' + e, v, testValue))

describe('baseValidators:or', () => {
  it(`uses Nothing as a default value`, () => {
    expect(or([success, success])()).toEqual(Right(Nothing))
  })

  it(`returns Right(value) for success OR success)`, () => {
    expect(or([success, success])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for success OR success OR success`, () => {
    expect(or([success, success, success])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for failure OR success`, () => {
    expect(or([failure('x'), success])(value)).toEqual(Right(value))
  })

  it(`returns Right(value) for success or failure`, () => {
    expect(or([success, failure('y')])(value)).toEqual(Right(value))
  })

  it(`returns Left(combined errors) for failure OR failure`, () => {
    expect(or([failure('x'), failure('y')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') }
        ],
        value: Just(1)
      })
    )
  })

  it(`returns Left(combined unique errors) for failure or failure or failure with duplication`, () => {
    expect(or([failure('x'), failure('y'), failure('x')])(value)).toEqual(
      Left({
        failures: [
          { errorType: 'FAILURE_x', testValue: Just('test') },
          { errorType: 'FAILURE_y', testValue: Just('test') }
        ],
        value: Just(1)
      })
    )
  })
})
