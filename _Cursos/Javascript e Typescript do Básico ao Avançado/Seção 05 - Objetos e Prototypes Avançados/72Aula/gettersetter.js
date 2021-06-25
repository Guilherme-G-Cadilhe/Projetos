function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra chave
    configurable: true, // configuravel
    get: () => {
      return estoque;
    },
    set: (valor) => {
      if (typeof valor !== 'number') {
        return;
      }
      estoque = valor;
    },
  });
}

const p1 = new Produto('cadeira', 50, 6);
//console.log(p1);
p1.estoque = ' Valor diferente';
//console.log(p1.estoque);

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      if (typeof valor !== 'string') {
        return;
      }
      return (nome = valor);
    },
  };
}

const teste = criaProduto('Guilherme');
teste.nome = 5;
console.log(teste.nome);
