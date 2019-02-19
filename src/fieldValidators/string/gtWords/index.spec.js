import { Just, Left, Nothing, Right } from 'sanctuary'

import { TOO_FEW_WORDS } from '../../../errorTypes'
import gtWords from './'

describe('baseValidators:gtWords', () => {
  it(`returns Left(TOO_FEW_WORDS error) when test words count in a string is less than actual words count in string)`, () => {
    expect(gtWords(Just(3))(Just('Bob is dead!'))).toEqual(
      Left({
        failures: [
          {
            errorType: 'TOO_FEW_WORDS',
            testValue: Just(3)
          }
        ],
        value: Just('Bob is dead!')
      })
    )
  })

  it('returns Right(Just(value)) when test words count in a string is greater than  to the actual words count in string', () => {
    expect(gtWords(Just(3))(Just('Tommy is no more, too.'))).toEqual(
      Right(Just('Tommy is no more, too.'))
    )
  })

  it('returns Right(Just(value)) when test words count in a string is nothing than actual words count in string', () => {
    expect(gtWords(Just(3))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Right(Nothing) when test words count in a string is equal to nothing words count in string`, () => {
    expect(gtWords(Nothing)(Just('Tommy is no more, too.'))).toEqual(
      Right(Just('Tommy is no more, too.'))
    )
  })
})
