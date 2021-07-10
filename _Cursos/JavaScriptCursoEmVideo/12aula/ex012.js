const agora = new Date();
const diaSem = agora.getDay();
const hora = agora.getHours();

switch (diaSem) {
  case 0:
    console.log(`Agora são exatamente ${hora} de Domingo!.`)
    break;
  case 1:
    console.log(`Agora são exatamente ${hora} horas de Segunda-feira!.`)
    break;
  case 2:
    console.log(`Agora são exatamente ${hora} horas de Terça-feira!.`)
    break;
  case 3:
    console.log(`Agora são exatamente ${hora} horas de Quarta-feira!.`)
    break;
  case 4:
    console.log(`Agora são exatamente ${hora} horas de Quinta-feira!.`)
    break;
  case 5:
    console.log(`Agora são exatamente ${hora} horas de Sexta-feira!.`)
    break;
  case 6:
    console.log(`Agora são exatamente ${hora} horas de Sabado!.`)
    break;
  default:
    break;
}