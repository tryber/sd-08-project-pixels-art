function mouseIncial () {
    let corIncial = document.getElementById("quad1");
    corIncial.classList.add("selected");

}
mouseIncial();
let corSelecionada;
let quadrado1 = document.getElementById("quad1");
let quadrado2 = document.getElementById("quad2");
let quadrado3 = document.getElementById("quad3");
let quadrado4 = document.getElementById("quad4");

quadrado1.addEventListener("click", function () {
    quadrado1.classList.add("selected");
    if (quadrado2.className = "color selected") {
        quadrado2.className = "color";
    }
    if (quadrado3.className = "color selected") {
        quadrado3.className = "color";
    }
    if (quadrado4.className = "color selected") {
        quadrado4.className = "color";
    }
});
 quadrado2.addEventListener("click", function () {
     quadrado2.classList.add("selected");
     if (quadrado1.className = "color selected") {
         quadrado1.className = "color";
     }
     if (quadrado3.className = "color selected") {
         quadrado3.className = "color";
     }
     if (quadrado4.className = "color selected") {
         quadrado4.className = "color";
     }
 });
 quadrado3.addEventListener("click", function () {
     quadrado3.classList.add("selected");
     if (quadrado2.className = "color selected") {
         quadrado2.className = "color";
     }
     if (quadrado1.className = "color selected") {
         quadrado1.className = "color";
     }
     if (quadrado4.className = "color selected") {
         quadrado4.className = "color";
     }
 });
 quadrado4.addEventListener("click", function () {
     quadrado4.classList.add("selected");
     if (quadrado2.className = "color selected") {
         quadrado2.className = "color";
     }
     if (quadrado3.className = "color selected") {
         quadrado3.className = "color";
     }
     if (quadrado1.className = "color selected") {
         quadrado1.className = "color";
     }
 });