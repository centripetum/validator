import { Left, Nothing, parseDate, Right } from 'sanctuary'

import { NOT_ON_OR_BEFORE_DATE_TIME } from '../../errorTypes'
import onOrBefore from './'

const testDate = parseDate('2001-01-01T00:00:00.000Z')

describe('baseValidators:onOrAfter', () => {
  it(`returns Right(Just(value)) if the value date-time is before the testValue date-time`, () => {
    expect(onOrBefore(testDate)(parseDate('2000-12-31'))).toEqual(
      Right(parseDate('2000-12-31'))
    )
  })

  it(`returns Right(Just(value)) if the value date-time matches the testValue date-time`, () => {
    expect(onOrBefore(testDate)(parseDate('2001-01-01'))).toEqual(
      Right(parseDate('2001-01-01'))
    )
  })

  it(`returns Left(NOT_ON_OR_BEFORE_DATE_TIME error) if the value date-time is after the testValue date-time`, () => {
    expect(onOrBefore(testDate)(parseDate('2001-01-02'))).toEqual(
      Left({
        failures: [
          { errorType: NOT_ON_OR_BEFORE_DATE_TIME, testValue: testDate }
        ],
        value: parseDate('2001-01-02')
      })
    )
  })

  it(`returns Right(Nothing) by default`, () => {
    expect(onOrBefore(testDate)(Nothing)).toEqual(Right(Nothing))
  })
})
