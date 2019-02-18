import { Just, Left, Nothing, Right } from 'sanctuary'

import { IS_NULL } from '../../errorTypes'
import notNull from './'

const test = 'test'

describe('baseValidators:notNull', () => {
  it(`returns Right(Just(value)) for Just(value)`, () => {
    expect(notNull(Just(test))).toEqual(Right(Just(test)))
  })

  it(`returns Left(IS_NULL error) for Nothing`, () => {
    expect(notNull(Nothing)).toEqual(
      Left({ failures: [{ errorType: IS_NULL }], value: Nothing })
    )
  })
})
