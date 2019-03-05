import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_A_STRING } from '../../errorTypes'
import isString from './'

describe('typeValidators:isString', () => {
  it(`returns Right(Just('test')) when value is Just('test')`, () => {
    expect(isString(Just('test'))).toEqual(Right(Just('test')))
  })

  it(`returns Right(Just('')) when value is Just('')`, () => {
    expect(isString(Just(''))).toEqual(Right(Just('')))
  })

  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(isString(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Left(NOT_A_STRING error) when value is Just(0)`, () => {
    expect(isString(Just(0))).toEqual(
      Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(0) })
    )
  })

  it(`returns Left(NOT_A_STRING error) when value is Just(false)`, () => {
    expect(isString(Just(false))).toEqual(
      Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(false) })
    )
  })

  it(`returns Left (NOT_A_STRING error) when value is Just([1, 2, 3])`, () => {
    expect(isString(Just([1, 2, 3]))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_A_STRING' }],
        value: Just([1, 2, 3])
      })
    )
  })

  it(`returns Left (NOT_A_STRING error) when value is Just({ test: true })`, () => {
    expect(isString(Just({ test: true }))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_A_STRING' }],
        value: Just({ test: true })
      })
    )
  })
})
