import { Just, Left, Right, Nothing } from 'sanctuary'

import lt from './'

describe('baseValidators:lt', () => {
  it(`returns Right(Just(24)) for Just(12)`, () => {
    expect(lt(Just(13))(Just(12))).toEqual(Right(Just(12)))
  })

  //it(`returns Left(Just(11)) for Just(12)`, () =>{
  //    expect(lt(Just(11))(Just(12))).toMatchObject(
  //            Left({
  //            failures: [{ errorType: 'FAIL_1', testValue: Just(5) }],
  //            value: Just(1)
  //  })
  //)
  //})
})
