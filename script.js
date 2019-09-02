let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")

const gameStart = () => {
    document.location.reload()
    inputContainer.style.display = "block";
    playerNumber.value = ""
    
}

const submit = () => {
    if(playerNumber.value > 0){

        for (i = 1; i <= playerNumber.value; i++){
    inputContainer.style.display = "none";

    console.log(playerNumber.value) 

    let player = document.createElement("div") 
    let playerTitle = document.createElement("h3")
    playerTitle.innerHTML = `Player ${i}`
    let playerScore = document.createElement("p")
    playerScore.innerHTML = "0"
    let divImage = document.createElement("div") 
    let diceImage = document.createElement("img")
    let rollBtn = document.createElement("button")
    rollBtn.innerHTML = "Roll"
    
    gameField.appendChild(player)
    player.appendChild(playerTitle)
    player.appendChild(playerScore)
    player.appendChild(divImage)
    divImage.appendChild(diceImage)
    player.appendChild(rollBtn)

  

    player.id = `player-${i}`
    
        }
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


