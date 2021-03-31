const agora = new Date()
const hora = agora.getHours()

if (hora >= 0 && hora <= 5) {
  console.log("Boa Noite!.")
  console.log(`Agora são exatamente ${hora} horas da Noite!`)
} else if (hora >= 6 && hora <= 12) {
  console.log("Bom dia!.")
  console.log(`Agora são exatamente ${hora} horas do Dia!`)
} else if (hora >= 13 && hora <= 18){
  console.log("Boa Tarde!.")
  console.log(`Agora são exatamente ${hora} horas da Tarde!`)
} else if (hora >= 19 && hora <= 24) {
  console.log("Boa Noite!.")
  console.log(`Agora são exatamente ${hora} horas da Noite!`)
} else {
  console.log("Hora Invalida!.")
}