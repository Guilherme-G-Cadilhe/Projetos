class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    return console.log(`${this.nome} está falando`);
  }
}
const p1 = new Pessoa("Bob", "nini");
const p2 = new Pessoa("Iank", "nini");
const p3 = new Pessoa("Aarley", "nini");
console.log(p1);
console.log(p2);
console.log(p3);
