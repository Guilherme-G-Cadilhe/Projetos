// Declaração de Função ( Function Hoisting )
falaOi();
function falaOi() {
  console.log("oi");
}

//Funções são First-Class Objects
// Function Expression
const souUmDado = function () {
  console.log("Sou um Dado.");
};
function executaFuncao(funcao) {
  console.log("Executando sua função abaixo");
  funcao();
}
executaFuncao(souUmDado);
//Function expression
// Arrow Function
const funcaoFlecha = () => {
  console.log("Sou uma Arrow Function");
};
funcaoFlecha();

//Dentro de um Objeto
const objeto = {
  falar() {
    console.log("Falando...");
  },
};
objeto.falar();
