function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof msg !== "string") {
        reject(new Error(`${msg} não é uma String`));
        return;
      }

      resolve(msg);
      return;
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixando Página", aleatorio(1, 3));
  }
}
baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((e) => console.log("Erro " + e));

// Promise.all | Promise.race | Promise.resolve | Promise.reject

// const promises = [
//   "Valor inicial aleatorio",
//   esperaAi("Promise 1", 3000),
//   esperaAi("Promise 2", 2000),
//   esperaAi("Promise 3", 1000),
//   "Valor final aleatorio",
// ];

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
