import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_A_BOOLEAN } from '../../errorTypes'
import isBoolean from './'

describe('typeValidators:isBoolean', () => {
  it('returns Right(Just(true)) when value is Just(true', () => {
    expect(isBoolean(Just(true))).toEqual(Right(Just(true)))
  })

  it('returns Right(Just(false)) when value is Just(false', () => {
    expect(isBoolean(Just(false))).toEqual(Right(Just(false)))
  })

  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(isBoolean(Nothing)).toEqual(Right(Nothing))
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just(0)', () => {
    expect(isBoolean(Just(0))).toEqual(
      Left({ failures: [{ errorType: NOT_A_BOOLEAN }], value: Just(0) })
    )
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just("test")', () => {
    expect(isBoolean(Just('test'))).toEqual(
      Left({ failures: [{ errorType: NOT_A_BOOLEAN }], value: Just('test') })
    )
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just("true")', () => {
    expect(isBoolean(Just('true'))).toEqual(
      Left({ failures: [{ errorType: NOT_A_BOOLEAN }], value: Just('true') })
    )
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just("")', () => {
    expect(isBoolean(Just(''))).toEqual(
      Left({ failures: [{ errorType: NOT_A_BOOLEAN }], value: Just('') })
    )
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just([1,2,3])', () => {
    expect(isBoolean(Just([1, 2, 3]))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_BOOLEAN }],
        value: Just([1, 2, 3])
      })
    )
  })

  it('returns Left(NOT_A_BOOLEAN error) when value is Just({ test: true })', () => {
    expect(isBoolean(Just({ test: true }))).toEqual(
      Left({
        failures: [{ errorType: NOT_A_BOOLEAN }],
        value: Just({ test: true })
      })
    )
  })
})
