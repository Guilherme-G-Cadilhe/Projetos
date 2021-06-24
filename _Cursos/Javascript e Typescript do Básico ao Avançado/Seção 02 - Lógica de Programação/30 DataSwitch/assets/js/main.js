const data = new Date();
let elemento = document.querySelector("h1.elemento");
elemento.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});

/*
function formataData(data) {
  let diaSemanaTexto;
  let mesTexto;
  const semana = data.getDay();
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();

  diaSemanaTexto = dayWeek(semana);
  mesTexto = nameMonth(mes);
  return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}.  As ${hora}:${minuto}.`;
}

function dayWeek(semana) {
  switch (semana) {
    case 0:
      return (semana = "Domingo");
    case 1:
      return (semana = "Segunda-Feira");
    case 2:
      return (semana = "Terça-Feira");
    case 3:
      return (semana = "Quarta-Feira");
    case 4:
      return (semana = "Quinta-Feira");
    case 5:
      return (semana = "Sexta-Feira");
    case 6:
      return (semana = "Sabado");
    default:
      return (semana = "SemanaNãoEncontrada");
  }
}

function nameMonth(mes) {
  switch (mes) {
    case 0:
      return (mes = "Janeiro");
    case 1:
      return (mes = "Fevereiro");
    case 2:
      return (mes = "Março");
    case 3:
      return (mes = "Abril");
    case 4:
      return (mes = "Maior");
    case 5:
      return (mes = "Junho");
    case 6:
      return (mes = "Julho");
    case 7:
      return (mes = "Agosto");
    case 8:
      return (mes = "Setembro");
    case 9:
      return (mes = "Outubro");
    case 10:
      return (mes = "Novembro");
    case 11:
      return (mes = "Dezembro");
    default:
      return (mes = "MesNãoEncontrado");
  }
}


const dataBrasil = formataData(data);
console.log(dataBrasil);

let elemento = document.querySelector("h1.elemento");
elemento.innerHTML = `${dataBrasil}`;
*/
