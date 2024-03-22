const choices = ["rock", "paper", "scissor"];
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor((Math.random)*3)];
    let result = "";
    if(playerChoice===computerChoice){
        console.log(result = "It's a tie!")
    }else{
        switch(playerChoice){
            case "rock": 
            result = (computerChoice==="scissor") ? "You win" : "You lose";
            break;

            case "paper": 
            result = (computerChoice==="rock") ? "You win" : "You lose";
            break;

            case "scissor": 
            result = (computerChoice==="paper") ? "You win" : "You lose";
            break;
        }
    }

    player.textContent = `PLAYER: ${playerChoice}`
    player.textContent = `COMPUTER: ${computerChoice}`
}