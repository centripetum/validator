import isEmpty from './'

describe('utilities:isEmpty', () => {
  it('returns false when the array is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('returns true when the array is empty', () => {
    expect(isEmpty([])).toBe(true)
  })
})
