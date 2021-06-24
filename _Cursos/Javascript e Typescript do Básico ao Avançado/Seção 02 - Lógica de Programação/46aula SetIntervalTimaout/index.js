function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
}

const timer = setInterval(function () {
  // Função anônima
  console.log(mostraHora()); //           CódigoExecutado
}, 1000); // 1 Seg (1000 ms),             Tempo Intervalo

setTimeout(function () {
  // Função anônima
  clearInterval(timer); // Limpa o Intervalo em uma const
}, 10000); // Define quando isso irá acontecer
