import { Just, Left, Nothing, Right } from 'sanctuary'

import { TOO_FEW_WORDS } from '../../../errorTypes'
import gteWords from './'

describe('baseValidators:gteWords', () => {
  it(`returns Left(TOO_FEW_WORDS error) when test words count in a string is less than actual words count in string)`, () => {
    expect(gteWords(Just(5))(Just('Bob is dead!'))).toEqual(
      Left({
        failures: [
          {
            errorType: 'TOO_FEW_WORDS',
            testValue: Just(5)
          }
        ],
        value: Just('Bob is dead!')
      })
    )
  })

  it('returns Right(Just(value)) when test words count in a string is greater than or equal to actual words count in string', () => {
    expect(gteWords(Just(5))(Just('Tommy is no more, too!'))).toEqual(
      Right(Just('Tommy is no more, too!'))
    )
  })

  it('returns Right(Just(value)) when test words count in a string is nothing than actual words count in string', () => {
    expect(gteWords(Just(5))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Right(Nothing) when test words count in a string is equal to nothing words count in string`, () => {
    expect(gteWords(Nothing)(Just('Tommy is no more, too!'))).toEqual(
      Right(Just('Tommy is no more, too!'))
    )
  })
})
