import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_A_STRING } from '../../errorTypes'
import isString from './'

describe('typeValidators:isString', () => {
  it(`returns Right(Just('test')) for Just('test')`, () => {
    expect(isString(Just('test'))).toEqual(Right(Just('test')))
  })

  it(`returns Right(Just('')) for Just('')`, () => {
    expect(isString(Just(''))).toEqual(Right(Just('')))
  })

  it(`returns Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(0) }) for Just(${0})`, () => {
    expect(isString(Just(0))).toEqual(
      Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(0) })
    )
  })

  it(`returns Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(false) }) for Just(${false})`, () => {
    expect(isString(Just(false))).toEqual(
      Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Just(false) })
    )
  })

  it(`returns Left ({failures: [{errorType: NOT_A_STRING}], value: Just ([1, 2, 3])}) for Just(${[
    1,
    2,
    3
  ]})`, () => {
    expect(isString(Just([1, 2, 3]))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_A_STRING' }],
        value: Just([1, 2, 3])
      })
    )
  })

  it(`returns Left ({failures: [{errorType: NOT_A_STRING}], value: Just ({test: true})}) for Just(${{
    test: true
  }})`, () => {
    expect(isString(Just({ test: true }))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_A_STRING' }],
        value: Just({ test: true })
      })
    )
  })

  it(`returns Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Nothing }) for Nothing`, () => {
    expect(isString(Nothing)).toEqual(
      Left({ failures: [{ errorType: 'NOT_A_STRING' }], value: Nothing })
    )
  })
})
