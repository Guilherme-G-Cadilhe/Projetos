const nome = prompt("Digite seu Nome");
document.body.style.fontSize = "20px";

document.body.innerHTML += `<p> O seu nome é ${nome} </p>`;
// ----
const nomeLetras = nome.replace(/\s/g, "").length;
document.body.innerHTML += `<p> Seu nome tem ${nomeLetras} Letras </p>`;
// ----
const segundaLetra = nome[1];
document.body.innerHTML += `<p> A segunda Letra do seu nome é ${segundaLetra} </p>`;
// ----
const primeiroIndice = nome.indexOf("i");
document.body.innerHTML += `<p> O primeiro Índice da letra i no seu nome é ${primeiroIndice} </p>`;
// ----
const ultimoIndice = nome.lastIndexOf("i", nomeLetras);
document.body.innerHTML += `<p> O último Índice da letra i no seu nome é ${ultimoIndice} </p>`;
// ----
const ultimasLetras = nome.slice(-3);
document.body.innerHTML += `<p> As últimas 3 letras do seu nome são: ${ultimasLetras} </p>`;
// ----
const palavrasDoNome = nome.split(" ");
document.body.innerHTML += `<p> As palavras, separadas, do seu nome são: ${palavrasDoNome} </p>`;
// ----
const nomeMaisculo = nome.toUpperCase();
document.body.innerHTML += `<p> Seu nome em Maisculo é : ${nomeMaisculo} </p>`;
// ----
const nomeMinusculo = nome.toLowerCase();
document.body.innerHTML += `<p> Seu nome em Minusculo é : ${nomeMinusculo} </p>`;

/*
Concluidos:

document.body.innerHTML += `Seu nome tem ______ letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ______<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome? ______<br />`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? ______<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`;
*/
