//getting buttons classes

const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
let results = document.querySelector(".results");
let button = document.querySelectorAll(".dis");
const reset = document.querySelector(".reset"); 


//getting random choice from computer
 

function getComputerChoice(){
    const data = ["ROCK","PAPER","SCISSOR"];
    return data[Math.floor(Math.random()*((2-0)+1)+0)];
   
}

//details

let round=0;
let playerMarks=0;
let pcMarks=0;



//playing game from ui

//scissor btn function

scissor.addEventListener('click',()=>{
let playerSelection = "SCISSOR"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
round++;
console.log("round: "+round)

console.log("computer marks: "+pcMarks);
console.log("Player marks: "+playerMarks);

if(round===5){
    if(playerMarks>pcMarks){
        console.log("you won")
        console.log(" ")
    
    }
    if (playerMarks==pcMarks) {
        console.log("match draw")
        console.log(" ")
    }
    if (pcMarks>playerMarks) {
        console.log("pc won")
        console.log(" ")
    }
    button.forEach(element => {
        element.disabled=true
    });
    
 
}

})


//paper button function

paper.addEventListener('click',()=>{
let playerSelection = "PAPER"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
round++;
console.log("round: "+round)

console.log("computer marks: "+pcMarks);
console.log("Player marks: "+playerMarks);

if(round===5){
    if(playerMarks>pcMarks){
        console.log("you won")
        console.log(" ")
    }
    if (playerMarks==pcMarks) {
        console.log("match draw")
        console.log(" ")
    }
    if (pcMarks>playerMarks) {
        console.log("pc won")
        console.log(" ")
    }
    button.forEach(element => {
        element.disabled=true
    });
}
})


//rock button function


rock.addEventListener('click',()=>{
let playerSelection = "ROCK"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
round++;
console.log("round: "+round)

console.log("computer marks: \n"+pcMarks);
console.log("Player marks: "+playerMarks);

if(round===5){
    if(playerMarks>pcMarks){
        console.log("you won")
        console.log(" ")
    
    }
    if (playerMarks==pcMarks) {
        console.log("match draw")
        console.log(" ")
    }
    if (pcMarks>playerMarks) {
        console.log("pc won")
        console.log(" ")
    }
    button.forEach(element => {
        element.disabled=true
    });
}


})



//reset btn

reset.addEventListener("click",()=>

button.forEach(element => {
    element.disabled=false
    round=0
    pcMarks=0
    playerMarks=0
    console.log(" ")

})

)






function playRound(playerSelection,computerSelection) {
        console.log("User: "+playerSelection)
        console.log("computer: "+computerSelection)

    if(playerSelection==computerSelection){
        console.log("tide")
    }
    if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        console.log("You lose! Paper beats rock")
        return pcMarks++;
        
    }
    if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        console.log("You Won! Paper beats rock")
        return playerMarks++;    
    }
    if(playerSelection=="SCISSOR" && computerSelection=="ROCK"){
        console.log("You lose! Rock beats Scissor")
        return pcMarks++; 
    }
    if(playerSelection=="ROCK" && computerSelection=="SCISSOR"){
        console.log("You Won! Rock beats Scissor")
        return playerMarks++; 
    }
    if(playerSelection=="PAPER" && computerSelection=="SCISSOR"){
        console.log("You lose! SCISSOR beats PAPER")
        return pcMarks++;  
    }
    if(playerSelection=="SCISSOR" && computerSelection=="PAPER"){
        console.log("You Won! SCISSOR beats PAPER")
        return playerMarks++;   
    }
     
  }

