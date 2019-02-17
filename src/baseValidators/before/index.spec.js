import { Just, Left, Nothing, Right, parseDate } from 'sanctuary'

import { IS_NULL } from '../../errorTypes'
import before from './'

describe('baseValidators:before', () => {
  it(`returns Right(Just(value))) when value is before testDate`, () => {
    expect(before(parseDate('2001-01-01'))(parseDate('2000-12-31'))).toEqual(
      Right(Just(new Date('2000-12-31T00:00:00.000Z')))
    )
  })

  it(`returns Left(NOT_BEFORE_DATE_TIME error) when value is the same as testDate`, () => {
    expect(before(parseDate('2001-01-01'))(parseDate('2001-01-01'))).toEqual(
      Left({
        failures: [
          {
            errorType: 'NOT_BEFORE_DATE_TIME',
            testValue: Just(new Date('2001-01-01T00:00:00.000Z'))
          }
        ],
        value: Just(new Date('2001-01-01T00:00:00.000Z'))
      })
    )
  })

  it(`returns Left(NOT_BEFORE_DATE_TIME error) when value is after testDate`, () => {
    expect(before(parseDate('2001-01-01'))(parseDate('2001-01-02'))).toEqual(
      Left({
        failures: [
          {
            errorType: 'NOT_BEFORE_DATE_TIME',
            testValue: Just(new Date('2001-01-01T00:00:00.000Z'))
          }
        ],
        value: Just(new Date('2001-01-02T00:00:00.000Z'))
      })
    )
  })

  it(`returns Right(Nothing) when value is Nothing`, () => {
    expect(before(parseDate('2001-01-01'))(Nothing)).toEqual(Right(Nothing))
  })
})
