
window.onload = function(){
    displayEntireBoard()
    const clickButton = document.getElementById("random-number")
    const range = arrayNumbers()
    clickButton.addEventListener("click", function () {
        randomNumberGenerator(range)
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
const arrayNumbers = function () {
    const array = [];
    for (let i = 0; i < 76; i++) {
      array.push(i + 1)
    }
    return array
  }
const getRandom = function (range) {
    let random = Math.floor(Math.random()* range.length)
    let random2 = range.splice(random, 1)[0]
    return random2
  }
const randomNumberGenerator = function (range) {
    let random1 = getRandom(range)
    const genNumber = document.getElementById("generated-number")
    genNumber.innerText = "Number: " + random1
    const cellSelected = document.querySelectorAll("#bingo-board-container .board-cells")
    cellSelected[random1 - 1].classList.add("selected")
}

