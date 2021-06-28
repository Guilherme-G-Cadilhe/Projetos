/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos objetos tem uma referência interna para um prototipo(__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro. */

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + '' + this.sobrenome;

const pessoa1 = new Pessoa('Guilherme', 'Guimarães');

console.log(pessoa1.nomeCompleto);
