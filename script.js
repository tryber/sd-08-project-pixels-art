const paletaDeCores = document.getElementById("color-palette");
const tabelaDeCores = ["blue", "pink", "green", "red", "yellow"];
for (let itens = 0; itens < tabelaDeCores.length; itens += 1) {
  let color = document.createElement("div");
  color.className = "color";
  color.style.background = tabelaDeCores[itens];
  color.style.display = "inline-block";
  paletaDeCores.appendChild(color);
  let text = document.createElement("p");
  text.innerHTML = tabelaDeCores[itens];
  color.appendChild(text);
}
