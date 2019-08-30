let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")

const gameStart = () => {
    inputContainer.style.display = "block";
    playerNumber.value = ""
}

const submit = () => {
    if(playerNumber.value > 0){
    inputContainer.style.display = "none";
    console.log(playerNumber.value) 
    let player = document.createElement("div") 
    player.innerHTML = "player 3"
    document.body.gameField.appendChild(player)
}
    else {
        playerNumber.value = "Please type a number"
    }
}

window.addEventListener("keypress", () => {
    if(event.which == 13){
        submit()
    }
})

window.addEventListener("keypress", () => {
    if(event.which == 32){
        gameStart ()
        console.log("May the best gambler win!")
    }
})

playerNumber.addEventListener("click", () => {
    playerNumber.value = ""
})
