window.onload = function(){
    //Escolha de cores da paleta.
    function setBackgroundColor(color){
        let setColor = document.querySelectorAll(".color");
        let colors = ["black", "purple", "blue", "yellow"];
            for(let index = 0; index < setColor.length ; index+=1){
                setColor[index].style.backgroundColor = colors[index];
        }
    }
    setBackgroundColor();

    //Quadro de pixels
    function setPixelBoard(){
        let pixelBoard = document.getElementById("pixel-board");
        let boardLine = 5;
        for (let index = 0; boardLine > index; index += 1){
            let pixelLine = document.createElement("div");
            pixelLine.className = "pixel-line";
            pixelBoard.appendChild(pixelLine);
            let setPixelBoard = document.getElementsByClassName("pixel-line");
            for(let boardColumn = 0; boardColumn < boardLine; boardColumn+=1){
                let pixelBoardContainer = setPixelBoard[index];
                let pixelLineBoard = document.createElement("div");
                pixelLineBoard.className = "pixel";
                pixelBoardContainer.appendChild(pixelLineBoard);
            }
        }
    }
    setPixelBoard();

    //Pintar pixels
    // function getThisColor(){
    //     let color = "black";
    //     let thisColor = querySelectorAll(".color");
    //     thisColor.addEventListener("click", function(){
    //         color = setBackgroundColor();
    //         console.log ("clicou na cor" + setBackgroundColor());
    //     })

    // }
    // getThisColor(setBackgroundColor());
}
