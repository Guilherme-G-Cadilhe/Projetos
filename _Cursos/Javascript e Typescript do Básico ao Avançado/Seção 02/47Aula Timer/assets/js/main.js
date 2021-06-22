function relogio() {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let seconds = 0;
  let timer;
  // </Bobnini>
  function formatDateSeconds() {
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function timerBegin() {
    timer = setInterval(() => {
      seconds++;
      relogio.innerHTML = formatDateSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    const elemento = event.target;

    if (elemento.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.style.color = "black";
      seconds = 0;
      relogio.innerHTML = formatDateSeconds(seconds);
    }
    // </Bobnini>
    if (elemento.classList.contains("iniciar")) {
      clearInterval(timer);
      timerBegin();
      relogio.style.color = "black";
    }

    if (elemento.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.style.color = "red";
    }
  });
}
relogio();
