import { Just, Left, Nothing, Right } from 'sanctuary'
import { NOT_GT } from '../../errorTypes'
import gt from './'

describe('baseValidators:gt', () => {
  it(`returns Right(Just(value)) when value is more than testValue`, () => {
    expect(gt(Just(19))(Just(20))).toEqual(Right(Just(20)))
  })

  it(`returns Left(NOT_GT error) when value is the same as the testValue`, () => {
    expect(gt(Just(20))(Just(20))).toEqual(
      Left({
        failures: [{ errorType: NOT_GT, testValue: Just(20) }],
        value: Just(20)
      })
    )
  })

  it(`returns Left(NOT_GT error) when the value is less than the testValue`, () => {
    expect(gt(Just(21))(Just(20))).toEqual(
      Left({
        failures: [{ errorType: NOT_GT, testValue: Just(21) }],
        value: Just(20)
      })
    )
  })

  it(`returns Right(Nothing) when the value is Nothing`, () => {
    expect(gt(Just(20))(Nothing)).toEqual(Right(Nothing))
  })
})
