const form = document.querySelector(".form");

//Função pro Evento em Si
form.addEventListener("submit", function (e) {
  e.preventDefault();

  /*Não coloca .value por que caso precise dos outros  dados, é bom te-los em sua  forma primitiva */
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  /*Agora que pega o Value e transforma em número.  assim fica separado os dados e mais organizado */
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  /*Teste mais facil pra validar dados falsos, um ! simplesmente diz que qualquer coisa que não seja um número valido, automaticamente é ignorado. Fazer isso sempre em evz de fazer um caso para cada dado falso individual */
  if (!peso) {
    setResultado("Peso Inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} , ( ${nivelImc}).`;
  setResultado(msg, true);
});

/*Funções separadas para serem chamadas na principal */

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  /*é sempre bom fazer de trás pra frente esses tipos de testes de IF */
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

/*Sempre crie funções separadas para cada partezinha individual, assim o código fica mais limpo e mais bem estruturado */
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

// ------------------------------------------------

// Capturar o Submit do Usuario
/*
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  resultado.innerHTML = "";

  const testePeso = form.querySelector("#peso").value;
  const testeAltura = form.querySelector("#altura").value;

  function recebeEvento(evento) {
    evento.preventDefault();

    if (testePeso === "" || testeAltura === "") {
      resultado.innerHTML = "Por favor, insira um valor!";
      resultado.style.backgroundColor = "yellow";
    } else {
      resultado.innerHTML = "Prossiga!";
    }

    const peso = Number(form.querySelector("#peso").value);
    const altura = Number(form.querySelector("#altura").value);
    let imc = 0;

    function calculaIMC(pesoIMC, alturaIMC) {
      pesoIMC = peso;
      alturaIMC = altura;

      return (imc = pesoIMC / (alturaIMC * alturaIMC));
    }
    calculaIMC(peso, altura);

    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
  }
  form.addEventListener("submit", recebeEvento);
}
//meuEscopo();
*/

// ------------------------------------------------
