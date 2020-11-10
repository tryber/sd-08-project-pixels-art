window.onload =criaBox();

/*function criaBox() {
  for (let index =0;index < 4; index +=1){
  let box =document.createElement("div");
  box.innerHTML = "cores";
  box.className = "cxcores";
  let elPronto = document.getElementsByClassName('.hdr')
  elPronto.appendChild(box);
  }  
};*/
function criaBox() {
  //for (let index =0;index < 4; index +=1){
    let para = document.createElement("div");
    let element = document.getElementById("hdr");
  para.innerHTML = "preto";
  para.className = "color";
  para.id = "preto";  
  element.appendChild(para);
  
  let parav = document.createElement("div");
  let elementv = document.getElementById("hdr");
  parav.innerHTML = "vermel";
  parav.className = "color";
  parav.id = "vermelho";  
  elementv.appendChild(parav);

  let parad = document.createElement("div");
  let elementd = document.getElementById("hdr");
  parad.innerHTML = "verde";
  parad.className = "color";
  parad.id = "verde";  
  elementd.appendChild(parad);

  let paraz = document.createElement("div");
  let elementz = document.getElementById("hdr");
  paraz.innerHTML = "azul";
  paraz.className = "color";
  paraz.id = "azul";  
  elementz.appendChild(paraz);
};
