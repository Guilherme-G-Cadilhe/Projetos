function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new Error(`${msg} não é uma String`));
      return;
    }
    setTimeout(function () {
      resolve(msg);
      return;
    }, tempo);
  });
}

esperaAi(22, aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Consultando API", aleatorio(1, 3));
  })
  .then((respostadois) => {
    return respostadois;
  })
  .then((respostaDoisDenovo) => {
    console.log(respostaDoisDenovo);
  })
  .then(() => {
    console.log("Terminado a sequência");
  })
  .catch((err) => {
    console.log(err);
  });

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
