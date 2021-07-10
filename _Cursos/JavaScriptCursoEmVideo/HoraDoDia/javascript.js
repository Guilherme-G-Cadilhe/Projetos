const agora = new Date()
const hora = agora.getHours()
const min = agora.getMinutes()

var atual = document.querySelector('p#atual');
var imagem = document.getElementById('imagem');


if (hora >= 0 && hora <= 5) {
  atual.innerHTML=`Agora são <strong>${hora} horas</strong> e <strong>${min} minutos</strong>`;
  imagem.src = 'noite.png';

} else if (hora >= 6 && hora <= 12) {
  atual.innerHTML=`Agora são <strong>${hora} horas</strong> e <strong>${min} minutos</strong>`;
  document.body.style.backgroundColor = '#cbb98d'
  imagem.src = 'manha.png';

} else if (hora >= 13 && hora <= 18){
  atual.innerHTML=`Agora são <strong>${hora} horas</strong> e <strong>${min} minutos</strong>`;
  document.body.style.backgroundColor = '#b9846f'
  imagem.src = 'tarde.png';

} else if (hora >= 19 && hora <= 24) {
  atual.innerHTML=`Agora são <strong>${hora} horas</strong> e <strong>${min} minutos</strong>`;
  document.body.style.backgroundColor = '#515154'
  imagem.src = 'noite.png';

} else {
  console.log("Hora Invalida!.");
}