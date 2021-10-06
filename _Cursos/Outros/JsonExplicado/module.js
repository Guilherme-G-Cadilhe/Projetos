// const fs = require('fs');
// const path = require('path');
// require('cross-fetch/polyfill');

// pessoas = [
//   {
//     nome: 'maria',
//     sobrenome: 'Vieira',
//     idade: 25,
//     ativo: false,
//     notas: ['A', 'A+'],
//     telefones: {
//       residencial: '00 0000-0000',
//       movel: '00 0000-0000',
//     },
//   },
//   {
//     nome: 'bob',
//     sobrenome: 'nini',
//     idade: 32,
//     ativo: true,
//     notas: ['B', 'A'],
//     telefones: {
//       residencial: '00 0000-0000',
//       movel: '00 0000-0000',
//     },
//   },
//   {
//     nome: 'guilherme',
//     sobrenome: 'cadilaque',
//     idade: 21,
//     ativo: true,
//     notas: ['A+', 'A+'],
//     telefones: {
//       residencial: '00 0000-0000',
//       movel: '00 0000-0000',
//     },
//   },
// ];

// const saveTo = path.resolve(__dirname, 'arquivo-javascript.json');

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((respostaJson) => {
//     fs.writeFileSync(saveTo, JSON.stringify(respostaJson, null, 2));
//   });

const json = require('./arquivo-javascript.json');

json.forEach((post) => console.log(post.title));
