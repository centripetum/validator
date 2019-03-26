import { Just, Left, Nothing, Right } from 'sanctuary'

import { NOT_A_DATE_TIME } from '../../errorTypes'
import isDate from './'

describe('typeValidators:isDate', () => {
  it('returns Right(Just(new Date())) when value is new Date()', () => {
    const date = new Date()
    expect(isDate(Just(date))).toEqual(Right(Just(date)))
  })

  it('returns Right(Just(new Date("2018-05-04T00:00:00.000Z")))', () => {
    expect(isDate(Just(new Date('2018-05-04T00:00:00.000Z')))).toEqual(
      Right(Just(new Date('2018-05-04T00:00:00.000Z')))
    )
  })

  it('returns Left (NOT_A_DATE_TIME error) from the value "May 4th"', () => {
    const date = new Date('May 4th')
    expect(isDate(Just(date))).toMatchObject(
      Left({
        failures: [{ errorType: NOT_A_DATE_TIME }],
        value: Just(date)
      })
    )
  })

  it('returns Left (NOT_A_DATE_TIME error) from the value NaN', () => {
    const date = new Date(NaN)
    expect(isDate(Just(date))).toMatchObject(
      Left({
        failures: [{ errorType: NOT_A_DATE_TIME }],
        value: Just(date)
      })
    )
  })
})
