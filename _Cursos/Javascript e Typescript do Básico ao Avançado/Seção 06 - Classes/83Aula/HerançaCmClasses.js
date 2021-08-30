class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado === true) {
      console.log(`${this.nome} já ligado!`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (this.ligado === false) {
      console.log(`${this.nome} já Desligado!`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
  ligar() {
    console.log("Você alterou o método de ligar");
  }
}
const s1 = new Smartphone("Android", "Cinza", "MotoG6");
console.log(s1);
s1.ligar();

// const torradeira = new DispositivoEletronico("Torradeira");

// torradeira.ligar();
// console.log(torradeira);
// torradeira.ligar();
// torradeira.desligar();
// console.log(torradeira);
// torradeira.desligar();
