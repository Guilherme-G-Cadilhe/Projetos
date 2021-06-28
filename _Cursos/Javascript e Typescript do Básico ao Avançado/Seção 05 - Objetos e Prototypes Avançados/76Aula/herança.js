//Produto -> aumento, desconto
//Caneca = material, Camiseta = cor
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = (quantia) => {
  this.preco += quantia;
};
Produto.prototype.desconto = (quantia) => {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: () => {
      return estoque;
    },
    set: function (qnt) {
      if (typeof qnt !== 'number') return;
      estoque += qnt;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca('Caneca rasa', 50, 'Madeira', 3);
caneca.estoque = 3;
console.log(caneca);
console.log(caneca.estoque);
