let cores = ["black", "red", "yellow", "green"];
let paleta = document.querySelector("#color-palette");

for (let index = 0; index < cores.length; index += 1){
  let andarCor = cores[index];
  let criaDiv = document.createElement("div");
  criaDiv.className = "color";
  criaDiv.style.backgroundColor = andarCor;

    paleta.appendChild(criaDiv);
}

let tabela = document.querySelector("#pixel-board");
for (let linha = 0; linha < 5; linha += 1){
  let tabelaLinha = document.createElement("tr");
  tabela.appendChild(tabelaLinha);
  let linhaLocal = document.querySelectorAll("tr")[linha];

    for (let coluna = 0; coluna < 5; coluna += 1){
      let tabelaColuna = document.createElement("td");
      tabelaColuna.className = "pixel";
      linhaLocal.appendChild(tabelaColuna);
    }
}


