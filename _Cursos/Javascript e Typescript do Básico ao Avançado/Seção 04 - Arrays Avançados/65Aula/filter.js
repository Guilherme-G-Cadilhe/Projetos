//Filter, map, reduce

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros.filter((arr) => arr > 10);

//console.log(resultado);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Guilherme', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 30 },
  { nome: 'Carol', idade: 12 },
];

const cincoLetras = pessoas.filter((obj) => obj.nome.length > 5);
const velhos = pessoas.filter((obj) => obj.idade > 50);
const nomeA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
//console.log(cincoLetras);
//console.log(velhos);
console.log(nomeA);
