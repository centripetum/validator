import { INVALID_URL, IS_NULL, NOT_A_STRING } from '../../errorTypes'
import { Just, Left, Nothing } from 'sanctuary'

import combineFailures from './'
import createFailures from '../createFailures'

const value = Just(1)
const testValueOne = Just(5)
const testValueTwo = Just(7)
const testValueThree = Just(9)
const errorOne = 'FAIL_1'
const errorTwo = 'FAIL_2'
const errorThree = 'FAIL_3'

const failureOne = createFailures(errorOne, value, testValueOne)
const failureTwo = createFailures(errorTwo, value, testValueTwo)
const failureThree = createFailures(errorThree, value, testValueThree)

describe('utilities:combineFailures', () => {
  it('handles a single failure', () => {
    expect(combineFailures([failureOne])).toMatchObject(
      Left({
        failures: [{ errorType: errorOne, testValue: testValueOne }],
        value
      })
    )
  })

  it('handles multiple errors', () => {
    expect(
      combineFailures([failureOne, failureTwo, failureThree])
    ).toMatchObject(
      Left({
        failures: [
          { errorType: errorOne, testValue: testValueOne },
          { errorType: errorTwo, testValue: testValueTwo },
          { errorType: errorThree, testValue: testValueThree }
        ],
        value
      })
    )
  })

  it('handles duplicate errors', () => {
    expect(combineFailures([failureOne, failureTwo, failureOne])).toMatchObject(
      Left({
        failures: [
          { errorType: errorOne, testValue: testValueOne },
          { errorType: errorTwo, testValue: testValueTwo }
        ],
        value
      })
    )
  })
})
