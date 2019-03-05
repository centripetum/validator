import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_UNEQUAL_TO } from '../../errorTypes'
import notEqualTo from './'

describe('baseValidators:notEqualTo', () => {
  it(`returns Right(Just(19)) for (Just(20))(Just(19))`, () => {
    expect(notEqualTo(Just(20))(Just(19))).toEqual(Right(Just(19)))
  })

  it(`returns Left({"failures": [{"errorType": undefined, "testValue": Just (20)}], "value": Just (20)}) for Just(20))(Just(20))`, () => {
    expect(notEqualTo(Just(20))(Just(20))).toEqual(
      Left({
        failures: [{ errorType: undefined, testValue: Just(20) }],
        value: Just(20)
      })
    )
  })

  it(`returns Right(Just(21)) for (Just(20))(Just(21))`, () => {
    expect(notEqualTo(Just(20))(Just(21))).toEqual(Right(Just(21)))
  })

  it(`returns Right(Nothing) for (Just(20))(Nothing)`, () => {
    expect(notEqualTo(Just(20))(Nothing)).toEqual(Right(Nothing))
  })
})
