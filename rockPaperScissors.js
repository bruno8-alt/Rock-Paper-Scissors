function getComputerChoice(){
 let Choices = ["Rock","Paper", "Scissors"]; 
 let result = Choices[Math.floor(Math.random()* Choices.length)];
 result = result.toLowerCase();
 return result;
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `It is a Draw!`;
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
        ) {
        return  `YOU WIN! ${playerSelection} beats ${computerSelection}.`;       
    }
    else if((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "paper" && computerSelection === "scissors")
        ) {
        return `YOU LOSE! ${computerSelection} beats ${playerSelection}.`;    
    }}
function game(){
let playerScore = 0;
let computerScore = 0;
    for(i = 0; i < 5; i++)
     {
     let roundWinner = playRound(playerSelection, getComputerChoice());
     console.log(roundWinner);
     if(roundWinner.includes("WIN")){
        playerScore++;
       } 
      else if(roundWinner.includes("LOSE")){
        computerScore++; 
    }}
    if(playerScore > computerScore){
        return `PLAYER WON!  Score: ${playerScore}-${computerScore}.`;
     }
    else if(playerScore < computerScore){
        return `COMPUTER WON! Score: ${computerScore}-${playerScore}.`; 
     }
    else{
        return `Draw!!! Score : ${playerScore}-${computerScore}.`;
     }}
let playerSelection = prompt("Enter either Rock, Paper or Scissors to play a random of 5 matches against the Computer!");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(game());

