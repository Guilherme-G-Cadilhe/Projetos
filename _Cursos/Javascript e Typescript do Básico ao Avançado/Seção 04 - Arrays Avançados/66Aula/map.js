const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((arr) => arr * 2);

//console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remove apenas a chave "nome" do objeto
// Adicione uma  chave id em cada objeto
const pessoas = [
  { nome: 'Guilherme', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 30 },
  { nome: 'Carol', idade: 12 },
];

const stringComNome = pessoas.map((obj) => {
  return obj.nome;
});
const removeChaveNome = pessoas.map((obj) => ({ idade: obj.idade }));
//delete obj.nome;
//return obj;

const addId = pessoas.map((obj, index) => {
  const newObj = { ...obj };
  newObj.id = index + 1;
  return newObj;
});
//return { id: index, ...obj };
console.log(addId);
