function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.clickBotoes();
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.removeOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.clickBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        this.removeOne();
      }
      if (el.classList.contains("btn-eq")) {
        this.calcular();
      }
    });
  };

  this.calcular = () => {
    let conta = this.display.value;
    conta = eval(conta);
    this.display.value = String(conta);
  };
}
const calculadora = new Calculadora();
calculadora.inicia();
