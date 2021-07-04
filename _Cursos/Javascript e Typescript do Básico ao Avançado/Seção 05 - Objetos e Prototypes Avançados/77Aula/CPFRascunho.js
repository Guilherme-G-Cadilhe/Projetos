// 705.404.450-52   070.987.720-03
/*

705.404.450 Multiplica por sequencia regressiva
-52 é o resultado que queremos chegar para validar

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o digito for maior q 9 = 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10 = 284

11 - (284 % 11) = 2 (Segundo digito)
Se o digito for maior q 9 = 0


concatenar os digitos resultantes com os números originais e comparar com o original
705.404.450-52 === 705.404.450
*/

const cpf = '705.484.450-52';

let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

const principalArray = [];

for (let i = 0; i < cpfArray.length - 2; i++) {
  principalArray.push(cpfArray[i]);
}

const cpfMulti = principalArray.map((valor, indice, array) => {
  return valor * (array.length - --indice);
});

const cpfSomado = cpfMulti.reduce((acc, valor) => {
  acc += Number(valor);
  return acc;
}, 0);

lastDig = (somado) => {
  const teste = 11 - (somado % 11);
  if (teste > 9) {
    teste = 0;
  } else {
    teste;
  }
  principalArray.push(teste);
};

lastDig(cpfSomado);

const cpfMultiDois = principalArray.map((valor, indice, array) => {
  return valor * (array.length - --indice);
});
const cpfSomadoDois = cpfMultiDois.reduce((acc, valor) => {
  acc += Number(valor);
  return acc;
}, 0);
lastDig(cpfSomadoDois);
//console.log(cpfMultiDois);
//console.log(cpfSomadoDois);
console.log(principalArray);
