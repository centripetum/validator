import flatMap from './'

const nested = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12]
const unnested = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

describe('utilities:flatMap', () => {
  it('flattens a nested array properly', () => {
    expect(flatMap(nested)).toEqual(unnested)
  })

  it('works with a flat array, returning it unchanged', () => {
    expect(flatMap(unnested)).toEqual(unnested)
  })

  it('works with an empty array', () => {
    expect(flatMap([])).toEqual([])
  })
})
