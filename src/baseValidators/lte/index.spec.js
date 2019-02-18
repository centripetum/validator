import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_LTE } from '../../errorTypes'
import lte from './'

describe('baseValidators:lte', () => {
  it('returns Right(Just(value) when value is less than testValue)', () => {
    expect(lte(Just(12))(Just(11))).toEqual(Right(Just(11)))
  })

  it('returns Right(Just(value)) when value is equal to testValue', () => {
    expect(lte(Just(12))(Just(12))).toEqual(Right(Just(12)))
  })

  it('returns Left(NOT_LTE error) when value is more than testValue', () => {
    expect(lte(Just(12))(Just(13))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_LTE,
            testValue: Just(12)
          }
        ],
        value: Just(13)
      })
    )
  })

  it('returns Right(Nothing) when value is Nothing', () => {
    expect(lte(Just(12))(Nothing)).toEqual(Right(Nothing))
  })
})
