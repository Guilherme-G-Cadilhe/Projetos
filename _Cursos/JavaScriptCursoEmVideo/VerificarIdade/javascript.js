function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados novamente!");
  } else {
    let fsex = document.getElementsByName("sex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute("src", "fotos/foto-bebe-m.png");
      } else if (idade < 25) {
        //Jovem
        img.setAttribute("src", "fotos/foto-jovem-m.png");
      } else if (idade < 59) {
        //Adulto
        img.setAttribute("src", "fotos/foto-adulto-m.png");
      } else {
        //Idoso
        img.setAttribute("src", "fotos/foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute("src", "fotos/foto-bebe-f.png");
      } else if (idade < 25) {
        //Jovem
        img.setAttribute("src", "fotos/foto-jovem-f.png");
      } else if (idade < 59) {
        //Adulto
        img.setAttribute("src", "fotos/foto-adulto-f.png");
      } else {
        //Idoso
        img.setAttribute("src", "fotos/foto-idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
