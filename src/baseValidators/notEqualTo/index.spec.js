import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_UNEQUAL_TO } from '../../errorTypes'
import notEqualTo from './'

describe('baseValidators:notEqualTo', () => {
  it(`returns Right(Just(value)) when the value is less than the test value`, () => {
    expect(notEqualTo(Just(20))(Just(19))).toEqual(Right(Just(19)))
  })

  it(`returns Left(NOT_UNEQUAL_TO error) when the value equals the test value`, () => {
    expect(notEqualTo(Just(20))(Just(20))).toEqual(
      Left({
        failures: [{ errorType: undefined, testValue: Just(20) }],
        value: Just(20)
      })
    )
  })

  it(`returns Right(Just(value)) when the value is greater than the test value`, () => {
    expect(notEqualTo(Just(20))(Just(21))).toEqual(Right(Just(21)))
  })

  it(`returns Right(Nothing) when the value is Nothing`, () => {
    expect(notEqualTo(Just(20))(Nothing)).toEqual(Right(Nothing))
  })
})
