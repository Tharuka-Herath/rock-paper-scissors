

function getComputerChoice(){
    const data = ["ROCK","PAPER","SCISSOR"];
    return data[Math.floor(Math.random()*((2-0)+1)+0)];
   
}
let playerSelection = prompt("Enter your choice: ");
playerSelection=playerSelection.toUpperCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
        console.log("User: "+playerSelection)
        console.log("computer: "+computerSelection)

    if(playerSelection==computerSelection){
        console.log("tide")
    }
    if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        console.log("You lose! Paper beats rock")
    }
    if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        console.log("You Won! Paper beats rock")
    }
    if(playerSelection=="SCISSOR" && computerSelection=="ROCK"){
        console.log("You lose! Rock beats Scissor")
    }
    if(playerSelection=="ROCK" && computerSelection=="SCISSOR"){
        console.log("You Won! Rock beats Scissor")
    }
    if(playerSelection=="PAPER" && computerSelection=="SCISSOR"){
        console.log("You lose! SCISSOR beats PAPER")
    }
    if(playerSelection=="SCISSOR" && computerSelection=="PAPER"){
        console.log("You Won! SCISSOR beats PAPER")
    }
     
  }

//   function game(){
//     playRound()
//   }
   
console.log(playRound(playerSelection,computerSelection))
