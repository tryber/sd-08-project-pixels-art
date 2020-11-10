function createBtn(nome, id) {
  const btn = document.createElement('button');
  btn.innerText = nome;
  btn.id = id;
  btn.className = btnClass;
  document.getElementById('button-container').appendChild(btn);
}

createBtn('limpar', 'clear-board');

createBtn('VQV', 'generate-board');
