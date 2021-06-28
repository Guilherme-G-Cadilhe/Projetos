//Construtore -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomecompleto = () => this.nome + '' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Guilherme', 'Guimarães');
const pessoa2 = new Pessoa('João', 'Iank');

console.log(pessoa1);
console.log(pessoa2);
