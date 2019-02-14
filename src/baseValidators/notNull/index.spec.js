import { Just, Left, Nothing, Right } from 'sanctuary'

import { IS_NULL } from '../../errorTypes'
import notNull from './'

const test = 'test'

describe('baseValidators:notNull', () => {
  it(`returns Right(Just(${test})) for Just(${test})`, () => {
    expect(notNull(Just(test))).toEqual(Right(Just(test)))
  })

  it(`returns Left({ errorType: IS_NULL, value: Nothing }) for Nothing`, () => {
    expect(notNull(Nothing)).toEqual(
      Left({ failures: [{ errorType: IS_NULL }], value: Nothing })
    )
  })
})
