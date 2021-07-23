const latinhas = ['Koka-Kola', 'Esprite'];

latinhas.push('colecao_especial');

const latinhasNaoEsprite = latinhas.filter((latinha) => {
  return latinha !== 'Esprite';
});

const latinhaKoka = latinhas.find((latinha) => {
  return latinha === 'Koka-Kola';
});

const encontrou = latinhas.includes('Esprite', 1);

const novasLatinhas = [...latinhas, 'Nova_Latinha'];

const latinhasAtualizadas = novasLatinhas.slice(-2);

// ------------------------------------------
const fruits = ['🍎', '🍇'];

const fruitList = fruits.map((fruit) => {
  return '<li>' + fruit + '</li>';
});

const fruitReverse = [...fruits].reverse();

fruits.forEach((fruit) => {
  console.log(fruit);
});
