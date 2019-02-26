import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_A_NUMBER } from '../../errorTypes'
import isNumber from './'

describe('typeValidators:isNumber', () => {
  it(`returns Right(Just(value)) when value is an integer`, () => {
    expect(isNumber(Just(12))).toEqual(Right(Just(12)))
  })

  it(`returns Right(Just(value)) when value is a floating point number`, () => {
    expect(isNumber(Just(12.01))).toEqual(Right(Just(12.01)))
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Nothing`, () => {
    expect(isNumber(Nothing)).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Nothing
      })
    )
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Just('test')`, () => {
    expect(isNumber(Just('test'))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Just('test')
      })
    )
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Just(false)`, () => {
    expect(isNumber(Just(false))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Just(false)
      })
    )
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Just([1, 2, 3])`, () => {
    expect(isNumber(Just([1, 2, 3]))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Just([1, 2, 3])
      })
    )
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Just({ test: true })`, () => {
    expect(isNumber(Just({ test: true }))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Just({ test: true })
      })
    )
  })

  it(`returns Left(NOT_A_NUMBER error) when value is Just(NaN)`, () => {
    expect(isNumber(Just(NaN))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_NUMBER }],
        value: Just(NaN)
      })
    )
  })
})
