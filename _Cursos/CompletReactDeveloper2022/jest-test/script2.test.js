const fetch = require('node-fetch');
const swapi = require('./script2')

describe('star wars API', () => {

  it('calls swapi to get people async', () => {

    expect.assertions(1)

    return swapi.getPeopleAsyncAwait(fetch).then((data) => {
      expect(data.count).toEqual(87);
    })

  })

  it('calls swapi to get people promisse', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(1)
    })
  })

  it('calls and returns count and results', () => {
    const mockFetch = jest
      .fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
      }))

    expect.assertions(4)

    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people')

      expect(data.count).toEqual(87)
      expect(data.results.length).toBeGreaterThan(4)
    })
  })


})