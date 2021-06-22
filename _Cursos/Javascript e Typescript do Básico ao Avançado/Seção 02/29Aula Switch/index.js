const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Seg";
    break;
  case 2:
    diaSemanaTexto = "ter";
    break;
  case 3:
    diaSemanaTexto = "quart";
    break;
  case 4:
    diaSemanaTexto = "quint";
    break;
  case 5:
    diaSemanaTexto = "sex";
    break;
  case 6:
    diaSemanaTexto = "sabad";
    break;
  default:
    diaSemanaTexto = "";
}

console.log(diaSemana, diaSemanaTexto);
