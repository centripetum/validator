import { Just, Left, Nothing, Right } from 'sanctuary'

import lt from './'

describe('baseValidators:lt', () => {
  it(`returns Right(Just(value)) when value is less than testValue`, () => {
    expect(lt(Just(12))(Just(11))).toEqual(Right(Just(11)))
  })

  it(`returns Left(NOT_LT error) when value is the same as the testValue`, () => {
    expect(lt(Just(12))(Just(12))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_LT', testValue: Just(12) }],
        value: Just(12)
      })
    )
  })

  it(`returns Left(NOT_LT error) when the value is more than the testValue`, () => {
    expect(lt(Just(12))(Just(13))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_LT', testValue: Just(12) }],
        value: Just(13)
      })
    )
  })

  it(`returns Right(Nothing) when the value is Nothing`, () => {
    expect(lt(Just(12))(Nothing)).toEqual(Right(Nothing))
  })
})
