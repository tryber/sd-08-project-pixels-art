const paletaDeCores = document.getElementById("color-palette");
const tabelaDeCores = ["blue", "pink", "green", "red"];
for (let itens = 0; itens < tabelaDeCores.length; itens += 1) {
  let color = document.createElement("div");
  color.className = "color";
  color.style.background = tabelaDeCores[itens];
  color.style.display = "inline-block";
  color.style.width = '100px'
  paletaDeCores.appendChild(color);
  let text = document.createElement("p");
  text.innerHTML = tabelaDeCores[itens];
  text.style.textAlign = 'center'
  color.appendChild(text);
}
