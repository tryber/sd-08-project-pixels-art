let cores = ["black", "red", "yellow", "green"];
let paleta = document.querySelector("#color-palette");

for (let index = 0; index < cores.length; index += 1){
  let andarCor = cores[index];
  let criaDiv = document.createElement("div");
  criaDiv.className = "color";
  criaDiv.style.backgroundColor = andarCor;

    paleta.appendChild(criaDiv);
}
/*tabela de pixel*/
let tabela = document.querySelector("#pixel-board");
for (let linha = 0; linha < 5; linha += 1){
  let tabelaLinha = document.createElement("div");
  tabela.appendChild(tabelaLinha);
  tabelaLinha.className = "line";
  let linhaLocal = document.querySelectorAll(".line")[linha];

    for (let coluna = 0; coluna < 5; coluna += 1){
      let tabelaColuna = document.createElement("div");
      tabelaColuna.className = "pixel";
      linhaLocal.appendChild(tabelaColuna);
    }
}

paleta.children[0].className += " selected";
/* Adiciona a classe para um novo elemento*/
function selecionaCor () {
    paleta.addEventListener ('click', function (event){
        for (let varre = 0; varre < cores.length; varre += 1){
           
            paleta.children[varre].className = "color";
        }
        event.target.className += " selected";
    });
}
selecionaCor ();

/*- Ao carregar a página deve ser possível pintar os pixels de preto;
- Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;
- Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.*/

function pintaPixel () {
    tabela.addEventListener ('click', function (event){
        let selecionado = document.querySelector(".selected");
        event.target.style.backgroundColor = selecionado.style.backgroundColor;
    })
}
pintaPixel ();