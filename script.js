const initColorPalette = () => {
  const cores = ["black", "blue", "red", "green", "yellow"];
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
