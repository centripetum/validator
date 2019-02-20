import { Left, Nothing, parseDate, Right } from 'sanctuary'

import { NOT_AFTER_DATE_TIME } from '../../errorTypes'
import after from './'

describe('baseValidators:after', () => {
  it(`returns Left(NOT_AFTER_DATE_TIME error) when the value date-time is before the testValue date-time`, () => {
    expect(after(parseDate('2001-01-01'))(parseDate('2000-12-31'))).toEqual(
      Left({
        failures: [
          { errorType: NOT_AFTER_DATE_TIME, testValue: parseDate('2001-01-01') }
        ],
        value: parseDate('2000-12-31')
      })
    )
  })

  it(`returns Left(NOT_AFTER_DATE_TIME error) when the value date-time matches the testValue date-time`, () => {
    expect(after(parseDate('2001-01-01'))(parseDate('2001-01-01'))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_AFTER_DATE_TIME,
            testValue: parseDate('2001-01-01')
          }
        ],
        value: parseDate('2001-01-01')
      })
    )
  })

  it(`returns Right(Just(value)) when the value date-time is after the testValue date-time`, () => {
    expect(after(parseDate('2001-01-01'))(parseDate('2001-01-02'))).toEqual(
      Right(parseDate('2001-01-02'))
    )
  })

  it(`returns Right(Nothing) by default`, () => {
    expect(after(parseDate('2001-01-01'))(Nothing)).toEqual(Right(Nothing))
  })
})
