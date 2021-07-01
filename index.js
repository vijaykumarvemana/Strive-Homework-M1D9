
window.onload = function(){
    displayEntireBoard()
    randomNumberGenerator()
}
const displayEntireBoard= function(){
    let bingoBoardNode = document.getElementById("bingo-board-container")
    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
        let cellNode = document.createElement("div") 
        cellNode.innerText = cellNumber 
        cellNode.classList.add("board-cells") 
        bingoBoardNode.appendChild(cellNode)
    }
}

const randomNumberGenerator = function () {
    let random = Math.round(Math.random()* 75 + 1)
    const genNumber = document.getElementById("generated-number");
    genNumber.innerText = "Number: " + random
    const cellSelected = document.querySelectorAll("#bingo-board-container .board-cells");
        cellSelected[random - 1].classList.add("selected");
}