let cores = ["black", "pink", "purple", "blue"];
let paleta = document.querySelector("#color-palette");

for (let contador = 0; contador < cores.length; contador += 1){
  
  let coresInicias = document.createElement("div");
  coresInicias.className = "color";
  coresInicias.style.backgroundColor = cores[contador];

    paleta.appendChild(coresInicias);
}
