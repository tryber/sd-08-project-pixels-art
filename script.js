const initColorPalette = () => {
  const cores = [
    "black",
    "#" + Math.random().toString(16).substr(2, 6),
    "#" + Math.random().toString(16).substr(2, 6),
    "#" + Math.random().toString(16).substr(2, 6),
  ];
  document.querySelectorAll(".color").forEach((element) => {
    //console.log(element)
    element.style.backgroundColor = cores[0];
    cores.shift();
  });
};

initColorPalette();

const pen = {
  color: "black",
};

document.getElementById("color-palette").addEventListener("click", () => {
  if (event.target.classList.contains("color")) {
    document.querySelectorAll(".color").forEach((element) => {
      element.classList.remove("selected");
    });
    event.target.classList.add("selected");
    pen.color = event.target.style.backgroundColor;
  }
});

document.getElementById("pixel-board").addEventListener("click", () => {
  if (event.target.classList.contains("pixel")) {
    event.target.style.backgroundColor = pen.color;
  }
  //console.log(event.target);
});

document.getElementById("clear-board").addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

document.getElementById("generate-board").addEventListener("click", () => {
  const size = document.getElementById("board-size").value || 0;
  //alert("oi!");
  if (size < 5 || size > 50) {
    alert("Board inválido!");
  }
  console.log(document.getElementById("board-size").value);
});
