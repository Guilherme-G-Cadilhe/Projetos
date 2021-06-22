function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (
          !conta ||
          conta === "" ||
          Number.isNaN(conta) ||
          typeof conta !== "number"
        ) {
          alert("Conta invalida");
          return;
        }
        this.display.value = String(conta);
      } catch (error) {
        alert("Conta invalida");
        return;
      }
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    cliqueBotoes() {
      //this ->  da Calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;
        // Coloca os valores na tela \/
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        // Limpa a tela \/
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
