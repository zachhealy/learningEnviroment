let playerScore = 0;
let compScore = 0;
let outcomeText = '';

let result = document.querySelector('div');

let pScore = document.createElement('p');
let cScore = document.createElement('p');
let outcome = document.createElement('p');
result.appendChild(pScore);
result.appendChild(cScore);
result.appendChild(outcome);


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];

}

function singleGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        outcomeText = "Tie Game!";
        return "Tie Game!";
    } else if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            outcomeText = "Player Wins! Rock beats Scissors";
            return "player"
        } else {
            outcomeText = "Player Lose! Paper beats Rock";
            return "computer"
        }
    } else if(playerSelection === "scissors"){
        if (computerSelection === "rock"){
            outcomeText = "Player Lose! Rock beats Scissors";
            return "player"
        } else {
            outcomeText = "Player Wins! Scissors beat Paper";
            return "computer"
        }
    } else if(playerSelection === "paper"){
        if (computerSelection === "rock"){
            outcomeText = "Player Wins! Paper beats Rock";
            return "player"
        } else {
            outcomeText = "Player Lose! Scissors beats Paper";
            return "computer"
        }
    }
    return error;

}   

function playRound(playerMove){
    let game = singleGame(playerMove, getComputerChoice());
    if (game === 'player'){
        playerScore++;
    } else if (game === 'computer') {
        compScore++;
    }
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score ${compScore}`;
    outcome.textContent = `${outcomeText}`;

    return game;
}
