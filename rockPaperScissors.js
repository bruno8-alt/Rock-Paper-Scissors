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
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return  `YOU WIN! ${playerSelection} beats ${computerSelection}.`;       
    }
    else{
        return `YOU LOSE! ${computerSelection} beats ${playerSelection}.`;    
    }    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Player choice =" + " " + playerSelection);
console.log("Computer choice =" + " " + computerSelection);
console.log(playRound(playerSelection, computerSelection));