const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.py4e.com/api/people').then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    });
}

const getPeopleAsyncAwait = async (fetch) => {
  const result = await fetch('https://swapi.py4e.com/api/people')
  const data = await result.json()
  return {
    count: data.count,
    results: data.results
  }
}

// getPeoplePromise(fetch)
// getPeopleAsyncAwait(fetch)
module.exports = {
  getPeoplePromise,
  getPeopleAsyncAwait
}