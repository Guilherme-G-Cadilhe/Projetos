// Reduce
//Some todos os números
//Retorne um array com os pares(filter)
//Retorne um array com o dobro dos valores(map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);
