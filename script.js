function createDivs() {
  const arrayColor = ["black", "blue", "gray", "red"];
  const palletDiv = document.getElementById("color-palette");
  for (let index = 0; index < arrayColor.length; index += 1) {
    let divColor = arrayColor[index];
    const myDivs = document.createElement("div");
    palletDiv.appendChild(myDivs);
    myDivs.className = "color";
    myDivs.style.backgroundColor = divColor;
  }
}
createDivs();