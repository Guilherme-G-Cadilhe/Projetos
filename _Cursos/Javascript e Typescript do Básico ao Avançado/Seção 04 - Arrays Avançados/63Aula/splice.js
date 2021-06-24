//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// pop
//const removidos = nomes.splice(-1, 1);
// shift
//const removidos = nomes.splice(0, 1);
//push
nomes.splice(nomes.length, 0, 'Teste');

console.log(nomes);
