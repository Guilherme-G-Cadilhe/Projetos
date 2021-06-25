// defineProperty - uma propriedade
// defineProperties - várias propriedades
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra chave
    value: estoque, // Valor
    writable: false, // poder alterar valor
    configurable: true, // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      value: nome, // Valor
      enumerable: true, // Mostra chave
    },
    preco: {
      value: preco, // Valor
    },
    estoque: {
      value: estoque, // Valor
      writable: false, // poder alterar valor
    },
  });
}

const p1 = new Produto('cadeira', 50, 6);

console.log(Object.keys(p1));
