import { Just, Left, Right, Nothing } from 'sanctuary'

import gtChars from './'

describe('fieldValidators:string:gtChars', () => {
  it(`Left ({"failures": [{"errorType": "TOO_FEW_CHARACTERS", "testValue": Just(3)}], "value": Just ("Bob")})`, () => {
    expect(gtChars(Just(3))(Just('Bob'))).toEqual(
      Left({
        failures: [{ errorType: 'TOO_FEW_CHARACTERS', testValue: Just(3) }],
        value: Just('Bob')
      })
    )
  })

  it(`returns Right(Just("Tommy")) for gtChars(Just(3))(Just("Tommy"))`, () => {
    expect(gtChars(Just(3))(Just('Tommy'))).toEqual(Right(Just('Tommy')))
  })

  it(`returns Right(Nothing) for gtChars(Just(3))(Nothing)`, () => {
    expect(gtChars(Just(3))(Nothing)).toEqual(Right(Nothing))
  })

  it(`returns Right(Just("Tommy")) for gtChars(Nothing)(Just("Tommy"))`, () => {
    expect(gtChars(Nothing)(Just('Tommy'))).toEqual(Right(Just('Tommy')))
  })
})
