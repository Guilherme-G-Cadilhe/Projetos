function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}
nome = retornaFuncao("guilherme");
console.log(nome());
