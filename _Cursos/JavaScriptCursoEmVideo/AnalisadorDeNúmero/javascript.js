let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.querySelector('div#res');
let valores = []

//Checa se o número está de acordo
function isNumero(n) {
  //De 1 a 100 apenas e sendo números.
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
//Checa se o número já existe na lista
function inLista(n, l) {
  // Se o valor dentro do array, não existir,no caso, ter a posição -1, retorna como verdadeiro que ele não está na lista
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
// Checa e valida para adicionar no array
function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    lista.innerHTML +=`Número ${num.value} Adicionado!`+ '\n';
    res.innerHTML='';
  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }
  num.value="";
  num.focus();
}

function finalizar() {
  
  if (valores.length == 0) {
    window.alert('Por favor, adicione um número antes.')
  } else {
    res.innerHTML='';
    let soma = 0;
    let media = 0;
    let tot = valores.length;
    let maior = valores[0]
    let menor = valores[0]
  
    for (let i in valores) {
      soma += valores[i] // Soma um por um
    }
    for (let i in valores) {
      if (valores[i] > maior) {
        maior = valores[i] 
        // Checa com o anterior se é maior
      }
      if (valores[i] < menor) {
        menor = valores[i]
        //Checa com o anterior se é menor
      }
    }
    media = soma / tot

    res.innerHTML += `<p><strong>Analizando....</strong><br>Total: ${tot} Valores Cadastrados!<br>Soma: ${soma}
    <br>Maior valor: ${maior}
    <br>Menor valor: ${menor}
    <br>Média: ${media} </p>`
  }
}

