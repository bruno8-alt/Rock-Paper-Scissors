function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    let result = choices[Math.floor(Math.random() * choices.length)];
    result = result.toLowerCase();
    return result;  
    }
let playerSelection;
let computerSelection;
count = 0;
playerScore = 0;
computerScore = 0;
const section = document.querySelector("section");
const computerChoice = document.createElement("p");
const para = document.createElement("p");
const paraWinner = document.createElement("p");

function btnClicked(value){
count++;
playerSelection = value;
computerSelection = getComputerChoice();
let display = console.log(count, playerSelection, computerSelection);
let roundWinner = playRound(playerSelection, computerSelection);
console.log(roundWinner);
computerChoice.textContent = ( count + "." + "ComputerSelection = " + computerSelection);
para.textContent = (roundWinner);
section.appendChild(computerChoice);
section.appendChild(para);
if(roundWinner.includes("WIN")){
    playerScore++;
}
else if(roundWinner.includes("LOSE")){
    computerScore++;
}
if(count===5){
    displayScore(playerScore, computerScore);
    count=0;
    playerScore=0;
    computerScore=0;
}
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `It is a Draw`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") 
        ){
         return `You LOSE. ${computerSelection} beats ${playerSelection}`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
        ){
       return `You WIN. ${playerSelection} beats ${computerSelection}`;
    }
    else{}
    }
    
    function displayScore(playerScore, computerScore){
        if(playerScore > computerScore){
            console.log(`Player Won. ${playerScore} - ${computerScore}`);
            paraWinner.textContent = `Player Won. ${playerScore} - ${computerScore}`
        }
        else if(playerScore < computerScore){
            console.log(`Computer Won. ${computerScore} - ${playerScore}`);
            paraWinner.textContent = `Computer Won. ${computerScore} - ${playerScore}`;
        }
        else{
            console.log(`DRAW!`);
            paraWinner.textContent = `DRAW! ${computerScore} - ${playerScore}`;
        }
    }  
    section.appendChild(paraWinner);
