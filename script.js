function createBtn(nome, id) {
  let newBtn = document.createElement('button');
  newBtn.innerText = nome;
  newBtn.id = id;
  newBtn.className = btn;
  document.getElementById('button-container').appendChild(newBtn);
}
createBtn("limpar", "clear-board");

createBtn("VQV", "generate-board");