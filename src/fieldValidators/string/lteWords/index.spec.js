import { Just, Left, Right, Nothing } from 'sanctuary'

import lteWords from './'

describe('fieldValidator:string:lteWords', () => {
  it(`returns Right(Just(value)) when the value's word count is less than or equal to the testValue`, () => {
    expect(lteWords(Just(3))(Just('Bob is dead!'))).toEqual(
      Right(Just('Bob is dead!'))
    )
  })

  it(`return LEFT(TOO_MANY_WORDS error) when the value's word count is greater than the testValue`, () => {
    expect(lteWords(Just(3))(Just('Tommy is no more, too.'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_WORDS', testValue: Just(3) }],
        value: Just('Tommy is no more, too.')
      })
    )
  })

  it(`return Right(Nothing) when value is Nothing`, () => {
    expect(lteWords(Just(3))(Nothing)).toEqual(Right(Nothing))
  })

  it(`return LEFT(TOO_MANY_WORDS error) when the value's word count is greater than testValue of Nothing`, () => {
    expect(lteWords(Nothing)(Just('Tommy is no more, too.'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_WORDS', testValue: Nothing }],
        value: Just('Tommy is no more, too.')
      })
    )
  })
})
