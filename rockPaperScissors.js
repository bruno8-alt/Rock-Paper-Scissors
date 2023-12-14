
function getComputerChoice(){
 let Choices = ["Rock","Paper", "Scissors"]; 
 let result = Choices[Math.floor(Math.random()* Choices.length)]; 
 return result;
}

function playRound(playerSelection, computerSelection){
    if(computerSelection === "Rock"){
        console.log("Draw");
        
    }
    else if(computerSelection === "Paper"){
        console.log("YOU LOSE! Paper beats Rock."); 
       
    }
    else{
        console.log("YOU WIN! Rock beats Scissors.");  
       
    } 
    return;           
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));


//‘Rock’, ‘Paper’ or ‘Scissors’.