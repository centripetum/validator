import { Just, Nothing } from 'sanctuary'

import valueWrapper from './'

import { stringify } from 'flatted'

const num = 0
const str = 'yes'
const bln = false
const arr = [1, 2, 3]
const obj = { test: true }
const empty = ''

describe('utilities:wordCount', () => {
  it(`returns Just(${num}) if passed ${num}`, () => {
    expect(valueWrapper(num)).toEqual(Just(num))
  })

  it(`returns Just(${str}) if passed ${str}`, () => {
    expect(valueWrapper(str)).toEqual(Just(str))
  })

  it(`returns Just(${bln}) if passed ${bln}`, () => {
    expect(valueWrapper(bln)).toEqual(Just(bln))
  })

  it(`returns Just(${stringify(arr)}) if passed ${stringify(arr)}`, () => {
    expect(valueWrapper(arr)).toEqual(Just(arr))
  })

  it(`returns Just(${stringify(obj)}) if passed ${stringify(obj)}`, () => {
    expect(valueWrapper(obj)).toEqual(Just(obj))
  })

  it(`returns Nothing if passed ${stringify(empty)}`, () => {
    expect(valueWrapper(empty)).toEqual(Nothing)
  })

  it(`returns Nothing if passed null`, () => {
    expect(valueWrapper(null)).toEqual(Nothing)
  })

  it(`returns Nothing if passed undefined`, () => {
    expect(valueWrapper()).toEqual(Nothing)
  })
})
