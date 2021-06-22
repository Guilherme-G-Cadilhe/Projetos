//Return
//Retorna um valor
// Termina a função

function criapessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criapessoa("guilherme", "guimaraes");
//console.log(p1);

// Return nestado
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }

  return falaResto;
}
const olamundo = falaFrase("ola");
//console.log(olamundo(" mundo"));

// Função Closure aninhada com Return's
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}
const triplica = criaMultiplicador(3);
console.log(triplica(5));
