//creation of the divs in the color palette
function createDivColor() {
  const divColor = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
    let divChild = document.createElement("div");
    divChild.className = "color";
    divColor.appendChild(divChild);
  }
  let divChild = divColor.children;

  divChild[0].style.background = "black";
  divChild[1].style.background = "red";
  divChild[2].style.background = "purple";
  divChild[3].style.background = "green";
}
createDivColor();
