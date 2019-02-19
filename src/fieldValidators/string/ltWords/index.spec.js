import { Just, Left, Nothing, Right } from 'sanctuary'

import ltWords from './'

describe('fieldValidators:string:ltWords', () => {
  it(`returns Right(Just(value)) when value has fewer words than testValue`, () => {
    expect(ltWords(Just(5))(Just('Bob is dead!'))).toEqual(
      Right(Just('Bob is dead!'))
    )
  })

  it(`returns Left(TOO_MANY_WORDS error) when value has the same number of words as the testValue`, () => {
    expect(ltWords(Just(5))(Just('Brian has five letters too.'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_WORDS', testValue: Just(5) }],
        value: Just('Brian has five letters too.')
      })
    )
  })

  it(`returns Left(TOO_MANY_WORDS error) when the value is more words than the testValue`, () => {
    expect(
      ltWords(Just(5))(Just('Charles has more letters than Brian'))
    ).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_WORDS', testValue: Just(5) }],
        value: Just('Charles has more letters than Brian')
      })
    )
  })

  it(`returns Right(Nothing) when the value is Nothing`, () => {
    expect(ltWords(Just(5))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Left(TOO_MANY_WORDS error) when the testValue is nothing`, () => {
    expect(ltWords(Nothing)(Just('Brian is my name'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_WORDS', testValue: Nothing }],
        value: Just('Brian is my name')
      })
    )
  })
})
