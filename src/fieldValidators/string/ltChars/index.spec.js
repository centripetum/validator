import { Just, Left, Nothing, Right } from 'sanctuary'

import ltChars from './'

describe('fieldValidators:string:lt', () => {
  it(`returns Right(Just(value)) when value has fewer characters than testValue`, () => {
    expect(ltChars(Just(5))(Just('Bob'))).toEqual(Right(Just('Bob')))
  })

  it(`returns Left(TOO_MANY_CHARACTERS error) when value has the same number of chracters as the testValue`, () => {
    expect(ltChars(Just(5))(Just('Brian'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_CHARACTERS', testValue: Just(5) }],
        value: Just('Brian')
      })
    )
  })

  it(`returns Left(TOO_MANY_CHARACTERS error) when the value is more than the testValue`, () => {
    expect(ltChars(Just(5))(Just('Charles'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_CHARACTERS', testValue: Just(5) }],
        value: Just('Charles')
      })
    )
  })

  it(`returns Right(Nothing) when the value is Nothing`, () => {
    expect(ltChars(Just(5))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Left(TOO_MANY_CHARACTERS error) when the testValue is nothing`, () => {
    expect(ltChars(Nothing)(Just('Brian'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_MANY_CHARACTERS', testValue: Nothing}],
        value: Just('Brian')
      })
    )
  })
})
