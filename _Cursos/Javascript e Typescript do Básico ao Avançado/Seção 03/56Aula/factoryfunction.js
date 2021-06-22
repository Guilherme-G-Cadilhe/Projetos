// Factory Function ( Função Fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto = "Falando nada") {
      return `${this.nome} está falando de ${assunto}.`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p1 = criaPessoa("guilherme", "guimaraes", 1.8, 60);
p1.nomeCompleto = "Bobnini Silva Cunha";
console.log(p1.nome);
console.log(p1.sobrenome);

// class User {
//   set name(value) {
//     this._name = value;
//   }

//   get name() {
//     return this._name;
//   }
// }
// const newUser = new User();

// newUser.name = "Guilherme";
// console.log(newUser.name);
