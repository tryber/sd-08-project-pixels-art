window.onload = function () {
  document.querySelector(".color");
};

let corSelecionada = "black";

function CreateEventsColor(event) {
  const colorClass = document.querySelector(".selected");
  colorClass.classList.remove("selected");
  event.classList.add("selected");
  corSelecionada = event.style.backgroundColor;
}
