import { INVALID_URL, IS_NULL, NOT_A_STRING } from '../../errorTypes'
import { Just, Left, Nothing } from 'sanctuary'

import combineFailures from './'
import createFailures from '../createFailures'

const failureOne = createFailures('FAIL_1', Just(1), Just(5))
const failureTwo = createFailures('FAIL_2', Just(3), Just(7))
const failureThree = createFailures('FAIL_3', Just(5), Just(9))

describe('utilities:combineFailures', () => {
  it('handles a single failure', () => {
    expect(combineFailures([failureOne])).toMatchObject(
      Left({
        failures: [{ errorType: 'FAIL_1', testValue: Just(5) }],
        value: Just(1)
      })
    )
  })

  it('handles multiple errors', () => {
    expect(
      combineFailures([failureOne, failureTwo, failureThree])
    ).toMatchObject(
      Left({
        failures: [
          { errorType: 'FAIL_1', testValue: Just(5) },
          { errorType: 'FAIL_2', testValue: Just(7) },
          { errorType: 'FAIL_3', testValue: Just(9) }
        ],
        value: Just(1)
      })
    )
  })

  it('handles duplicate errors', () => {
    expect(combineFailures([failureOne, failureTwo, failureOne])).toMatchObject(
      Left({
        failures: [
          { errorType: 'FAIL_1', testValue: Just(5) },
          { errorType: 'FAIL_2', testValue: Just(7) }
        ],
        value: Just(1)
      })
    )
  })
})
