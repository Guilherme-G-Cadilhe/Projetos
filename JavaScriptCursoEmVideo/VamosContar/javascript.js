function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.querySelector("div#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossvel contar..";
    window.alert("[ERRO] Aceitamos acima de 0 e Inicio < Fim");
  } else {
    res.innerHTML = "Contando: <br> ";

    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("[ERRO] Passo Invalido, considerando PASSO 1!");
      p = 1;
    }
    if (i < f) {
      //Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c}, `;
      }
    } else {
      //Contagem Regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c}, `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
