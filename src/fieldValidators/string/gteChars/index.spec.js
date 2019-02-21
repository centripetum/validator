import { Just, Left, Nothing, Right } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'
import gteChars from './'

describe('fieldValidators:gteChars', () => {
  it(`returns Left(Just(value)) when value is less than testValue`, () => {
    expect(gteChars(Just(5))(Just('Bob'))).toEqual(
      Left({
        failures: [
          {
            errorType: TOO_FEW_CHARACTERS,
            testValue: Just(5)
          }
        ],
        value: Just('Bob')
      })
    )
  })

  it(`returns Right(Just(value)) when value is more than testValue`, () => {
    expect(gteChars(Just(5))(Just('Tommy'))).toEqual(Right(Just('Tommy')))
  })

  it(`returns Right(Nothing) when value is nothing`, () => {
    expect(gteChars(Just(5))(Nothing)).toEqual(Right(Nothing))
  })
})
