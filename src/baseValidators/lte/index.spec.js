import { Just, Left, Nothing, Right } from 'sanctuary'
import { NOT_LTE } from '../../errorTypes'
import lte from './'

describe('baseValidators:lte', () => {
  it('returns Right(Just(11) for lte(Just(12))(Just(11))', () => {
    expect(lte(Just(12))(Just(11))).toEqual(Right(Just(11)))
  })

  it('returns Right(Just(12) for lte(Just(12))(Just(12))', () => {
    expect(lte(Just(12))(Just(12))).toEqual(Right(Just(12)))
  })

  it('returns a NOT_LTE error for lte(Just(12))(Just(13))', () => {
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

  it('returns Right(Nothing) for lte(Just(12))(Nothing)', () => {
    expect(lte(Just(12))(Nothing)).toEqual(Right(Nothing))
  })
})
