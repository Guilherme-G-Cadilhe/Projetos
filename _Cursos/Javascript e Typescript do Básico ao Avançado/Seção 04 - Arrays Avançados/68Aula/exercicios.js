// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (Somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
  .filter((arr) => arr % 2 === 0)
  .map((arr) => arr * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

// const dobro = pares.map((arr) => {
//   return arr * 2;
// });
// const soma = dobro.reduce((acumulador, valor) => {
//   return (acumulador += valor);
// });

console.log(pares);
