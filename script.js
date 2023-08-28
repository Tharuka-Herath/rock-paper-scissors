//getting random choice from computer
 

function getComputerChoice(){
    const data = ["ROCK","PAPER","SCISSOR"];
    return data[Math.floor(Math.random()*((2-0)+1)+0)];
   
}

//marks 



//playing game


let round=1;
let playerMarks=0;
let pcMarks=0;
let play= true;

while(play){

let playerSelection = prompt("Enter your choice: ");
playerSelection=playerSelection.toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
round++;
if(round==6){
    if(playerMarks>pcMarks){
        console.log("you won")
    }
    else{
        console.log("pc won")
    }
    play=false;
}



}





    


function playRound(playerSelection,computerSelection) {
        console.log("User: "+playerSelection)
        console.log("computer: "+computerSelection)

    if(playerSelection==computerSelection){
        console.log("tide")
    }
    if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        console.log("You lose! Paper beats rock")
        pcMarks++;
        console.log("computer marks: "+pcMarks)
    }
    if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        console.log("You Won! Paper beats rock")
        playerMarks++;
        console.log("Player marks: "+playerMarks)
        
    }
    if(playerSelection=="SCISSOR" && computerSelection=="ROCK"){
        console.log("You lose! Rock beats Scissor")
        pcMarks++;
        console.log("computer marks: "+pcMarks)
       
    }
    if(playerSelection=="ROCK" && computerSelection=="SCISSOR"){
        console.log("You Won! Rock beats Scissor")
        playerMarks++;
        console.log("Player marks: "+playerMarks)
      
    }
    if(playerSelection=="PAPER" && computerSelection=="SCISSOR"){
        console.log("You lose! SCISSOR beats PAPER")
        pcMarks++;
        console.log("computer marks: "+pcMarks)
      
    }
    if(playerSelection=="SCISSOR" && computerSelection=="PAPER"){
        console.log("You Won! SCISSOR beats PAPER")
        playerMarks++;
        console.log("Player marks: "+playerMarks)
        
    }
     
  }


 
   
