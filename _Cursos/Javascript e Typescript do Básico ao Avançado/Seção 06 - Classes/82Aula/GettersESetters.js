const _velocidade = Symbol("Velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  set velocidade(value) {
    console.log("SETTER");
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_velocidade] = value;
  }
  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}
const c1 = new Carro("Fusca");
//for (let i = 0; i <= 200; i++) c1.acelerar();
c1.velocidade = 90;
console.log(c1.velocidade);
