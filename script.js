console.log('teste');
function createBtn(nome, id) {
  const btn = document.createElement('button');
  btn.innerHTML = nome;
  btn.id = id;
  
  document.getElementById('button-container').appendChild(btn);
}

createBtn('limpar', 'clear-board');

createBtn('VQV', 'generate-board');
