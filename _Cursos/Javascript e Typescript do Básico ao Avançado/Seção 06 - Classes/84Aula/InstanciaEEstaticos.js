class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // Método Estático
  static trocaPilha() {
    console.log("Ok, vou trocar.");
  }
  // Métodos de Instancia
  aumentarVolume() {
    if (this.volume >= 100) return;
    this.volume += 5;
  }
  diminuirVolume() {
    if (this.volume <= 0) return;
    this.volume -= 5;
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
