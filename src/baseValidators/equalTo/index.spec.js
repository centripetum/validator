import { Just, Left, Nothing, Right } from 'sanctuary'
import { NOT_EQUAL_TO } from '../../errorTypes'
import equalTo from './'

describe('baseValidators:equalTo', () => {
  it(`returns Right(Just(value)) when value is equal to testValue`, () => {
    expect(equalTo(Just(20))(Just(20))).toEqual(Right(Just(20)))
  })

  it(`returns Left(NOT_EQUAL_TO) when value is more than testValue`, () => {
    expect(equalTo(Just(19))(Just(20))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_EQUAL_TO,
            testValue: Just(19)
          }
        ],
        value: Just(20)
      })
    )
  })

  it(`returns Left(NOT_EQUAL_TO) when value is less than testValue`, () => {
    expect(equalTo(Just(21))(Just(20))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_EQUAL_TO,
            testValue: Just(21)
          }
        ],
        value: Just(20)
      })
    )
  })

  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(equalTo(Just(20))(Nothing)).toEqual(Right(Nothing))
  })
})
