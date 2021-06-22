const paragrafos = document.querySelector(".paragrafos");
// Seleciona o elemento pai ( Div ) e seus filhos
const elementos = paragrafos.querySelectorAll("p");
// Pega os elementos filhos como Array ( Nodelist)

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of elementos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "white";
}
