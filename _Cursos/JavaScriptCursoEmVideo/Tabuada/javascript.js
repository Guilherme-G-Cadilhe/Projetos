function tabuada() {
  let txti = document.getElementById('txti');
  let textarea = document.getElementById('textarea');

  if (txti.value.length == 0 || txti.value == 0) {
    alert('(Erro) Digite um Número!')
  } else {
    let x = Number(txti.value);
    textarea.innerHTML='';
    for (let i = 1; i <= 10; i++) {
      
      textarea.innerHTML += `${i} x ${x} = ${ i*x}` + '\n';
    }
  }
}
