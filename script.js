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
let corParaPintar = "black";

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
    corParaPintar = "black"
    console.log(corParaPintar);
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
     corParaPintar = "red";
     console.log(corParaPintar);
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
    corParaPintar = "green";
    console.log(corParaPintar);
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
     corParaPintar = "blue";
     console.log(corParaPintar);
 });

 let pixels = document.querySelectorAll(".pixel");
 for (let index = 0; index < pixels.length; index += 1) {
     let pixelParaPintar = pixels[index];
     pixelParaPintar.addEventListener("click", function () {
        pixelParaPintar.style.backgroundColor = corParaPintar;
     })
 }

 let botao = document.getElementById("btn");
 botao.addEventListener("click", function () {
    for (let index = 0; index < pixels.length; index += 1) {
        let pixelParaLimpar = pixels[index];
        pixelParaLimpar.style.backgroundColor = "white";
        
    }
 })
 // corParaPintar.style.backgroundColor