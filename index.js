
window.onload = function(){
    displayEntireBoard()
    randomNumberGenerator()
    const clickButton = document.getElementById("random-number")
    clickButton.addEventListener("click", function () {
        randomNumberGenerator();
        })
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

const getRandom = function () {
    let random = Math.floor(Math.random()* 76)
    return random
  }
const randomNumberGenerator = function () {
    const genNumber = document.getElementById("generated-number");
    let random1 = getRandom()
    genNumber.innerText = "Number: " + random1
    const cellSelected = document.querySelectorAll("#bingo-board-container .board-cells");
    cellSelected[random1 - 1].classList.add("selected");
}