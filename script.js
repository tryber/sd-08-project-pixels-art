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
  for (let index =0;index < 4; index +=1){
    let para = document.createElement("div");
    let element = document.getElementById("hdr");
  para.innerHTML = "cor";
  para.className = "color";
    if(index=0);{ para.id ="vpreto"
    elseif (index =1); {para.id="vermelho"}
    elseif (index =2); {para.id="azul"}
    para.id = "verde"
  }
  element.appendChild(para);
  }
};
