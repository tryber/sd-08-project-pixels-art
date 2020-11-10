const initColorPalette = () => {
    const cores = ['black','#e6be51','#579ea9','#0f579b']
    document.querySelectorAll('.color').forEach((element) => {
      //console.log(element)
        element.style.backgroundColor = cores[0]
        cores.shift()
    })
}



let selectedColor = "black"

document.getElementById("color-palette").addEventListener("click", () => {
    document.querySelectorAll('.color').forEach((element) => {
        element.classList.remove("selected")
    })
    event.target.classList.add("selected");
    selectedColor = event.target.style.backgroundColor
    document.getElementById("color-palette").style = ''
});

document.getElementById("pixel-board").addEventListener("click", ()=>{
   event.target.style.backgroundColor = selectedColor;
});

document.getElementById("clear-board").addEventListener("click", ()=>{
  document.querySelectorAll('.pixel').forEach((element) => {
        element.style.backgroundColor = "white"
    })
});
