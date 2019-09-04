let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")
let turn = 1


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
    playerScore.id = `player-${i}-score`
    

    
    const roll = () => {

            
            let random = Math.floor(Math.random()*6)
            let images = [`dice1.png`, `dice2.png`,`dice3.png`, `dice4.png`,`dice5.png`, `dice6.png` ]
            diceImage.src  = `./img/${images[random]}`

            if( random != 0){
            playerScore.innerHTML = random+1 + Number(playerScore.innerHTML)
            if(playerScore.innerHTML >= 21)
            {
                alert(`Player ${turn} has won! Congratulations to you lucky gambler.`)
                gameStart()
            }
               
            console.log(turn) 
            
            
            // document.getElementById(`player-${turn}`).disabled = false
            

            if(turn < playerNumber.value){
                
                 
                        document.getElementById(`player-${turn}-button`).disabled = true
                        
                        document.getElementById(`player-${turn+1}-button`).disabled = false 
                        turn = turn + 1 
                       
                       
                    } else { 
                        document.getElementById(`player-${turn}-button`).disabled = true 
                        turn = 1
                        document.getElementById(`player-${turn}-button`).disabled = false 
                    
                    }
                     
                   
            
                    
                    } else  {console.log(`Player ${turn} has lost`)
                    document.getElementById(`player-${turn}-button`).className = "loser"
                    document.getElementById(`player-${turn}-button`).style.display = "none"

                    if(turn < playerNumber.value ){
                
                 
                        document.getElementById(`player-${turn}-button`).disabled = true 
                        document.getElementById(`player-${turn+1}-button`).disabled = false 
                        turn = turn + 1 
                       
                       
                    } else { 
                        document.getElementById(`player-${turn}-button`).disabled = true 
                        turn = 1
                        document.getElementById(`player-${turn}-button`).disabled = false 
                    
                    }
                     
                    
                    
                            }
                            for(i = 1; i < playerNumber.value; i++)
                            if(document.getElementById(`player-${turn}-button`).style.display == "none"){
                                document.getElementById(`player-${turn+i}-button`).disabled = false 
                        turn = turn + 1 
                            }

         

   } 

  
   
   rollBtn.disabled = true
  

  
   if(turn == 1){
       document.getElementById(`player-1-button`).disabled = false
      
   }else if (turn >1){
    document.getElementById(`player-${turn}-button`).disabled = false
   }
   
//    if(diceImage.src  = "./img/dice1.png" == true){
//        rollBtn.disabled = true
                    
// }




   rollBtn.addEventListener("click", roll)

   

   
    
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

