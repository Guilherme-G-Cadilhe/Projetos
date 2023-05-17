const googleDatabase = [
  'cats.com',
  'dogs.com',
  'souprecipes.com',
  'flowers.com',
  'catpictures.com',
  'socialnetwork.com'
];

const googleSearch = (db, searchInput) => {
  const matches = db.filter((websites) => websites.includes(searchInput))
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

const foundWebsites = googleSearch(googleDatabase, 'cat')
// console.log('foundWebsites :>> ', foundWebsites);

module.exports = googleSearch;