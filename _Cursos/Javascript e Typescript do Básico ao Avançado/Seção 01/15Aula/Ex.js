const numString = prompt("Digite um Número");
document.body.style.fontSize = "20px";

const num = Number(numString);
// --- Número
document.body.innerHTML += `<p> <strong>O seu número é ${num} </strong></p>`;
// --- Raiz
const raiz = num ** 0.5;
document.body.innerHTML += `<p> A Raiz quadrada dele é: ${raiz} </p>`;
// --- Inteiro true ou false
const inteiro = Number.isInteger(num);
document.body.innerHTML += `<p> Ele é inteiro?: ${inteiro} </p>`;
// --- NaN true ou false
const eNaN = Number.isNaN(num);
document.body.innerHTML += `<p> Ele é Not a number(NaN)?: ${eNaN} </p>`;
// --- Arredondar Pra baixo
const arreBaixo = Math.floor(num);
document.body.innerHTML += `<p> Arredondado pra cima: ${arreBaixo} </p>`;

// --- Arredondar Pra cima
const arreCima = Math.ceil(num);
document.body.innerHTML += `<p> Arredondado pra baixo: ${arreCima} </p>`;

// --- Com duas casas decimais
const decimal = num.toFixed(2);
document.body.innerHTML += `<p> Duas casas decimais: ${decimal}</p>`;

/*
Raiz quadrada
Inteiro true ou false
é NaN true ou false
Arredondando pra baixo
Arredondando pra cima
Duas casas decimais*/
