import { Just, Left, Right, Nothing } from 'sanctuary'

import gtChars from './'

describe('fieldValidators:string:gtChars', () => {
  it(`returns Left(TOO_FEW_CHARACTERS error) when the length of the string is the same as the testValue`, () => {
    expect(gtChars(Just(3))(Just('Bob'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_FEW_CHARACTERS', testValue: Just(3) }],
        value: Just('Bob')
      })
    )
  })

  it(`returns Right(Just(value)) when the length of the string is greater than the testValue`, () => {
    expect(gtChars(Just(3))(Just('Tommy'))).toEqual(Right(Just('Tommy')))
  })

  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(gtChars(Just(3))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Right(Just(value)) when the testValue is Nothing`, () => {
    expect(gtChars(Nothing)(Just('Tommy'))).toEqual(Right(Just('Tommy')))
  })
})
