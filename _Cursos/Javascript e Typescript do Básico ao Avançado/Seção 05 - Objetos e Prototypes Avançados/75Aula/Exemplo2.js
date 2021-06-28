function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};
const p1 = new Produto('Cadeira', 50);

//Literal
const p2 = {
  nome: 'Camiseta',
  preco: 120,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    configurable: true,
    //etc..
  },
  nome: {
    value: 'Algo',
  },
});
