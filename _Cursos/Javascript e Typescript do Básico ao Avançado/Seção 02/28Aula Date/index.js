function zeroAEsquerda(segundo) {
  return segundo >= 10 ? segundo : `0${segundo}`;
}

function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();

  let novoSeg;
  novoSeg = zeroAEsquerda(segundo);
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${novoSeg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// const tresHoras = 60 * 60 * 3 * 1000;
// // Adicionar 3 horas

// const umDia = 60 * 60 * 24 * 1000;
// //Adicionar um Dia

// const data = new Date("2021-04-13 16:43:59");

// //     Ano ,Mes(0-11), hora,minuto,segundo,milissegundo

// // 01/01/1970 Timestamp Unix ou época unix.

// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getMilliseconds());
// console.log(data.getDay());
