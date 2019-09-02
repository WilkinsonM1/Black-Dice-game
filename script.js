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
    
    let playerScore = document.createElement("p")
    
    let divImage = document.createElement("div") 
    let diceImage = document.createElement("img")
    let rollBtn = document.createElement("button")
    playerTitle.innerHTML = `Player ${i}`
    playerScore.innerHTML = "0"
    let score = Number(playerScore.innerHTML)
    rollBtn.innerHTML = "Roll"
    
    gameField.appendChild(player)
    player.appendChild(playerTitle)
    player.appendChild(playerScore)
    player.appendChild(divImage)
    divImage.appendChild(diceImage)
    player.appendChild(rollBtn)

  

    player.id = `player-${i}`
    playerScore.className = "score"
    diceImage.className = "dice-image"
    rollBtn.className = "roll-button"
    
    diceImage.id = `player-${i}-die`
    rollBtn.id = `player-${i}-button`
    playerScore.id = `plater-${i}-score`
    
    const roll = () => {

            console.log("works fine mate")
                if (Math.random() < 0.17){
    diceImage.src = "./img/dice1.png"
}
else if (Math.random() < 0.33){
    diceImage.src = "./img/dice2.png"
 }
 else if (Math.random() < 0.5){
    diceImage.src = "./img/dice3.png"
 }
 else if (Math.random() < 0.67){
    diceImage.src = "./img/dice4.png"
 }
 else if (Math.random() < 0.83){
    diceImage.src = "./img/dice5.png"
 }
 else if (Math.random() < 1){
    diceImage.src = "./img/dice6.png"
 }

   } 
    
   rollBtn.addEventListener("click", roll)

   

   const scoreTracker = () => {
    console.log("the scoreTracker works too")
       
    if(diceImage.id.src == "./img/dice1.png"){  score = score +1 
        
   }

  
   }


   rollBtn.addEventListener("click", scoreTracker)
    
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







