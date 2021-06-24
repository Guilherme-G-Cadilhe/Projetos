function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    pessoas.push = [
      { nome: nome, sobrenome: sobrenome, peso: peso, altura: altura },
    ];
    console.log(pessoas);

    resultado.innerHTML += `<p>Nome: ${nome} <br/> Sobrenome: ${sobrenome} <br/> peso: ${peso} <br/> altura: ${altura}</p>`;
    return pessoas;
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

// form.onsubmit = function (evento) {
//   evento.preventDefault();
//   alert(1);
// };
