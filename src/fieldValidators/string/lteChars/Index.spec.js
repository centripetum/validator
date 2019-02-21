import { Just, Left, Nothing, Right } from 'sanctuary'

import lteChars from './'
import { TOO_MANY_CHARACTERS } from '../../../errorTypes'

const testValue = Just(3)

describe('fieldValidators:string:ltChars', () => {
  it(`returns Right(Just(value)) when value has the same number of characters as testValue`, () => {
    expect(lteChars(testValue)(Just('Bob'))).toEqual(Right(Just('Bob')))
  })

  it(`returns Left(TOO_MANY_CHARACTERS error) when value has more chracters than the testValue`, () => {
    expect(lteChars(testValue)(Just('Tommy'))).toEqual(
      Left({
        failures: [{ errorType: TOO_MANY_CHARACTERS, testValue: testValue }],
        value: Just('Tommy')
      })
    )
  })

  it(`returns Right(Nothing) as a default`, () => {
    expect(lteChars(testValue)(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Left(TOO_MANY_CHARACTERS error) when the testValue is Nothing`, () => {
    expect(lteChars(Nothing)(Just('Tommy'))).toEqual(
      Left({
        failures: [{ errorType: TOO_MANY_CHARACTERS, testValue: Nothing }],
        value: Just('Tommy')
      })
    )
  })
})
