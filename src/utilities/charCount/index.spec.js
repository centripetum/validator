import { Just, Nothing } from 'sanctuary'

import charCount from './'

describe('utilities:charCount', () => {
  it(`returns Just(17) for Just(' some characters ')`, () => {
    expect(charCount(Just(' some characters '))).toEqual(Just(17))
  })

  it(`returns a Just(0) for Just('')`, () => {
    expect(charCount(Just(''))).toEqual(Just(0))
  })

  it(`returns Nothing when Nothing received`, () => {
    expect(charCount(undefined)).toEqual(Nothing)
  })

  it(`returns Nothing when undefined received`, () => {
    expect(charCount(undefined)).toEqual(Nothing)
  })
})
