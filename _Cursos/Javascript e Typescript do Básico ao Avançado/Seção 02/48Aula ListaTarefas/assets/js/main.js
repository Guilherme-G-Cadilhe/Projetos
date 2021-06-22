const novaTarefa = document.querySelector(".new_task");
const btnTarefa = document.querySelector(".btn_add_task");
const tarefas = document.querySelector(".tasks");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  novaTarefa.value = "";
  novaTarefa.focus();
}

function criaBtnApagar(li) {
  li.innerText += "";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML += `<img class="svgIcon" alt="svg do flaticon.com" src="assets/img/excluir.svg" />`;
  botaoApagar.setAttribute("class", "btn_apagar");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi(textoInput);
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBtnApagar(li);
  salvarTarefas();
}

novaTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
  }
});

btnTarefa.addEventListener("click", function () {
  if (!novaTarefa.value) return;
  criaTarefa(novaTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("btn_apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalas();
