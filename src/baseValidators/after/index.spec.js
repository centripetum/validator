import { Left, Nothing, parseDate, Right } from 'sanctuary'

import { NOT_AFTER_DATE_TIME } from '../../errorTypes'
import after from './'

const testDate = parseDate('2001-01-01T00:00:00.000Z')

describe('baseValidators:after', () => {
  it(`returns Left (NOT_AFTER_DATE_TIME, testValue, value) if the value date-time is before the testValue date-time`, () => {
    expect(after(testDate)(parseDate('2000-12-31'))).toEqual(
      Left({
        failures: [{ errorType: NOT_AFTER_DATE_TIME, testValue: testDate }],
        value: parseDate('2000-12-31')
      })
    )
  })

  it(`returns Left (NOT_AFTER_DATE_TIME, testValue, value) if the value date-time is on the testValue date-time`, () => {
    expect(after(testDate)(parseDate('2001-01-01'))).toEqual(
      Left({
        failures: [
          {
            errorType: NOT_AFTER_DATE_TIME,
            testValue: testDate
          }
        ],
        value: parseDate('2001-01-01')
      })
    )
  })

  it(`returns Right (value) if the value date-time is after the testValue date-time`, () => {
    expect(after(testDate)(parseDate('2001-01-02'))).toEqual(
      Right(parseDate('2001-01-02'))
    )
  })

  it(`returns Right(Nothing) by default`, () => {
    expect(after(testDate)(Nothing)).toEqual(Right(Nothing))
  })
})
