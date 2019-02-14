import { Just, Left, Right, Nothing } from 'sanctuary'

import lt from './'

describe('baseValidators:lt', () => {
  it(`returns Right(Just(11)) for lt(Just(12))(Just(11))`, () => {
    expect(lt(Just(12))(Just(11))).toEqual(Right(Just(11)))
  })

  it(`Left ({"failures": [{"errorType": "NOT_LT", "testValue": Just (12)}], "value": Just (12)})`, () => {
    expect(lt(Just(12))(Just(12))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_LT', testValue: Just(12) }],
        value: Just(12)
      })
    )
  })

  it(`Left ({"failures": [{"errorType": "NOT_LT", "testValue": Just (12)}], "value": Just (13)})`, () => {
    expect(lt(Just(12))(Just(13))).toEqual(
      Left({
        failures: [{ errorType: 'NOT_LT', testValue: Just(12) }],
        value: Just(13)
      })
    )
  })

  it(`returns Right(Nothing) for lt(Just(12))(Nothing)`, () => {
    expect(lt(Just(12))(Nothing)).toEqual(Right(Nothing))
  })
})
