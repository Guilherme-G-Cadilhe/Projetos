// Função Construtora -> Objetos
// Função Fábrica -> Objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos Privados
  const ID = 123456;
  const metodoInterno = function () {};
  // Atributos ou métodos Publicos
  this.metodo = () => {
    console.log("Sou um método");
  };
  this.nome = nome;
  //Pessoa.nome = nome
  this.sobrenome = sobrenome;
  //Pessoa.sobrenome = sobrenome
}
const p1 = new Pessoa("Guilherme", "Guimarães");
const p2 = new Pessoa("Bob", "nini");

console.log(p1.nome);
p1.metodo();
