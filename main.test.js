const {
  exampleFunction,
} = require('./main.js')

describe('exampleFunction', () => {
  it(`does nothing, so... you should probably change this test`, () => {
    expect(exampleFunction()).toBe(undefined)
  })

})

describe('exclaim', () => {
  test('adds an exclamation point at the end of the given string', () => {
    expect(exclaim('hello')).toBe('hello!')
  })

  test('adds a second exclamation point if there already is one', () => {
    expect(exclaim('hello!')).toBe('hello!!')
  })
})
