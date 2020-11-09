function limpar() {
    const backgroundColor = "";
    const botao = document.querySelector('#clear-board');
    const tabela = document.querySelectorAll('.pixel')  
    botao.addEventListener("click", changeColor);
    function changeColor() {    
        for(let i in tabela) {
            tabela[i].style.backgroundColor = "white"; 
        }                 
    }
}
limpar();