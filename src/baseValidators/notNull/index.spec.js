import { Just, Right, Left, Nothing } from 'sanctuary'

import notNull from './'
import { IS_NULL } from '../../errorTypes'

const test = 'test'

describe('baseValidators:notNull', () => {
  it(`returns Right(Just(${test})) for Just(${test})`, () => {
    expect(notNull(Just(test))).toEqual(Right(Just(test)))
  })

  it(`returns Left({ errorType: IS_NULL, value: Nothing }) for Nothing`, () => {
    expect(notNull(Nothing)).toEqual(
      Left({ errorType: IS_NULL, value: Nothing })
    )
  })
})
