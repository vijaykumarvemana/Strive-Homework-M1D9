
window.onload = function(){
    displayEntireBoard()
}
const displayEntireBoard= function(){
    let bingoBoardNode = document.getElementById("bingo-board-container")
    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
    let cellNode = document.createElement("div") 
    cellNode.innerText = cellNumber 
    cellNode.classList.add("board-cells") 
    bingoBoardNode.appendChild(cellNode)
    cellNode.onclick = randomNumberGenerator(event)

}
}

const randomNumberGenerator = function (event) {
    Math.round(Math.random()* 75 + 1)
}