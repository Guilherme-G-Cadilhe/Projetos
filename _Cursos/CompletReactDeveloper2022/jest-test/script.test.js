const googleSearch = require('./script')

dbMock = [
  'owl.com',
  'wolf.com',
  'wolfpics.com',
  'fish.com'
]
it('this is a silly test', () => {
  expect('hello').toBe('hello')
})
test('this is also a test(only alias changes)', () => {
  googleSearch(dbMock, 'test')
})

it('is searching google', () => {
  expect(googleSearch(dbMock, 'wolfteste')).toEqual([])
  expect(googleSearch(dbMock, 'wolf')).toEqual(['wolf.com', 'wolfpics.com',])
})

describe("googleSearch", () => {

  it('work with undefined and null input', () => {
    expect(googleSearch(dbMock, null)).toEqual([])
    expect(googleSearch(dbMock, undefined)).toEqual([])
  })

  test('it does not return more than 3 matches', () => {
    expect(googleSearch(dbMock, '.com').length).toEqual(3)
  })

})

