function selectedColor() {
  const colorClass = document.querySelector(".selected");
  colorClass.classList.remove(".selected");
  Event.target.classList.add("selected");
}
