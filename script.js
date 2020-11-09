let cores = ['black',corXablau(),corXablau(),corXablau()];
let paleta = document.getElementsByClassName('color');


function corXablau(){
    let xablau = `0123456789ABCDEF`;
    let meDePapai = `#`
    for (var a = 0; a < 6; a++){
        meDePapai += xablau [Math.floor(Math.random()*16)];
    }
    return meDePapai;
}

for(let a = 0; a < cores.length; a+=1){
    paleta[a].style.backgroundColor = cores[a];
}