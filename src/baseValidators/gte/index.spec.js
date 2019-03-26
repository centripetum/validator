import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_GTE } from '../../errorTypes'
import gte from './'

describe('baseValidators:gte', () => {
  it(`returns Left(${NOT_GTE} error) when testvalue is less than Value)`, () => {
    expect(gte(Just(20))(Just(19))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_GTE,
            testValue: Just(20)
          }
        ],
        value: Just(19)
      })
    )
  })

  it('returns Right(Just(value)) when testvalue is equal to Value', () => {
    expect(gte(Just(20))(Just(20))).toEqual(Right(Just(20)))
  })

  it('returns Right(Just(value)) when testvalue is greater than to Value', () => {
    expect(gte(Just(20))(Just(21))).toEqual(Right(Just(21)))
  })
  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(gte(Just(20))(Nothing)).toEqual(Right(Nothing))
  })
})
