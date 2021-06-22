const pessoa1 = {
  nome: "Guilherme",
  fala() {
    console.log(`${this.nome} fala: Bom dia Mundo!`);
  },
};

pessoa1.fala();

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Guilherme", "Guimarães", 20);

// console.log(pessoa1);

// const pessoa1 = {
//   nome: "Guilherme",
//   sobrenome: "Guimarães",
//   idade: 20
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);
