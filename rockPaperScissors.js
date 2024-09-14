function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    let result = choices[Math.floor(Math.random() * choices.length)];
    result = result.toLowerCase();
    return result;  
    }
let playerSelection;
let computerSelection;
const section = document.querySelector("section");
const scoreBoard = document.querySelector(".score");
const computerChoice = document.createElement("p");
const paraRound = document.createElement("p");
const paraWinner = document.createElement("p");
count = 0;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(button.value === "rock"){
       playerSelection = "rock";
    }
    else if(button.value === "paper"){
       playerSelection = "paper";
    }
    else if(button.value === "scissors"){
       playerSelection = "scissors";
    }
    else{}
    computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection);
    if(roundWinner.includes("WIN")){
        count++;
        playerScore++;
        paraRound.style.color = "green";
    }
    else if(roundWinner.includes("LOSE")){
        count++;
        computerScore++;
        paraRound.style.color = "rgb(121, 61, 61)";
    }
    else{
        count++;
        paraRound.style.color = "rgba(255, 255, 0, 0.76)";
    }
    computerChoice.textContent = (count + ". ComputerSelection = " + computerSelection);
    computerChoice.style.fontWeight = "bold";
    section.appendChild(computerChoice);
    scoreBoard.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    paraRound.textContent = (roundWinner);
    section.appendChild(paraRound);
    if(count===5){
        displayScore(playerScore, computerScore);
        count = 0;
        playerScore=0;
        computerScore=0;
    }
    else{paraWinner.remove();}
  });
});
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `Round Winner: It is a Draw`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") 
        ){
         return `Round Winner: You LOSE. ${computerSelection} beats ${playerSelection}`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
        ){
       return `Round Winner: You WIN. ${playerSelection} beats ${computerSelection}`;
    }
    else{}
    }
    function displayScore(playerScore, computerScore){
        if(playerScore > computerScore){
            paraWinner.textContent = `SCORE = ${playerScore} - ${computerScore} !!!YOU WON!!!`
            paraWinner.classList = "";
            paraWinner.classList.add("winner");
            section.appendChild(paraWinner);
        }
        else if(playerScore < computerScore){
            paraWinner.textContent = `SCORE = You LOST ${computerScore} - ${playerScore} , Computer Won.`;
            paraWinner.classList = "";
            paraWinner.classList.add("loser");
            section.appendChild(paraWinner);
        }
        else{
            paraWinner.textContent = `SCORE = DRAW! ${computerScore} - ${playerScore}`;
            paraWinner.classList = "";
            paraWinner.classList.add("draw");
            section.appendChild(paraWinner);
        }}
    
    
