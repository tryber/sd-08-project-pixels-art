let body = document.querySelector("body");
let div = document.createElement("div");

body.appendChild(div);
let h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "Paleta de Cores";
div.appendChild(h1);

let ul = document.createElement("ul");
ul.id = "color-palette";
div.appendChild(ul);

for (let index=0; index<4; index++){
    let color = ["black", "green", "blue", "red"];
    let li = document.createElement("li");
    li.className = "classe color";
    ul.appendChild(li);

    let colorIndex = document.querySelectorAll(".classe");
    colorIndex[index].style.backgroundColor = color[index];
}



