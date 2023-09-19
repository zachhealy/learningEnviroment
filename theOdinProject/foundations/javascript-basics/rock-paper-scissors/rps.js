function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];

}

function singleGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "Tie Game!";
    } else if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            console.log("Player Wins! Rock beats Scissors");
            return "player"
        } else {
            console.log("Player Lose! Paper beats Rock");
            return "computer"
        }
    } else if(playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("Player Lose! Rock beats Scissors");
            return "player"
        } else {
            console.log("Player Wins! Scissors beat Paper");
            return "computer"
        }
    } else if(playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log("Player Wins! Paper beats Rock");
            return "player"
        } else {
            console.log("Player Lose! Scissors beats Paper");
            return "computer"
        }
    }
    return error;

}   


function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let userInput = prompt("Please select a move: ");

        let outcome = singleGame(userInput, getComputerChoice());

        if (outcome === "player"){
            playerScore++;
        } else {
            computerScore++;
        }
        
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`)

    }
}

game();