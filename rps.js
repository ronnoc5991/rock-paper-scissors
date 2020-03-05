var options = Array('ROCK' , 'PAPER' , 'SCISSORS');
let computerSelection;
let playerSelection;
let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let roundCount = 1;

document.getElementById("Rock").addEventListener("click", rockwasclicked);
document.getElementById("Paper").addEventListener('click' , paperwasclicked);
document.getElementById("Scissors").addEventListener('click' , scissorswasclicked);

function computerPlay(){ //this randomizes the computers selection
    computerSelection = options[Math.floor(Math.random() *options.length)];
    return computerSelection;
}

function rockwasclicked(){ //this is run if rock is clicked
    console.log('rock');
    playerRock();
}

function paperwasclicked(){ //this is run if paper is clicked
    console.log('paper');
    playerPaper();
}

function scissorswasclicked(){ //this is run if scissors is clicked
    console.log('scissors');
    playerScissors();
}

function playRound(playerSelection){ //this function takes the players selection as input and decides which function to run based on their selection
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection + ' VS ' + computerSelection);
    if (playerSelection === 'ROCK'){
        playerRock();
    } else if (playerSelection === 'PAPER'){
        playerPaper();
    } else if (playerSelection == 'SCISSORS'){
        playerScissors();
    } else {
          console.log('Something is wrong here!');
    }
   return playerSelection;
}


function playerRock(){ //this plays upon rock being clicked
    let x = computerPlay();
   if (x == 'ROCK'){
        console.log('TIE!');
        return ++tieCount;
   } else if (x == 'PAPER'){
        console.log('You Lose!  PAPER beats ROCK!');
        return ++lossCount;
   } else if (x == 'SCISSORS'){
        console.log('You Win! ROCK beats SCISSORS!');
        return ++winCount;
   } else {
        console.log('Something is wrong here.');
    }
}


function playerPaper(){ // this plays upon paper being clicked
    let x = computerPlay();
    if (x == 'PAPER'){
        console.log('TIE!');
        return ++tieCount;
    } else if (x == 'ROCK'){
        console.log('You Win! PAPER beats ROCK!');
        return ++winCount;
    } else if (x == 'SCISSORS') {
        console.log('You Lose! SCISSORS beats PAPER!');
        return ++lossCount;
    } else {
        console.log('Something is wrong here.');
    }
}


function playerScissors(){ //if the player selects scissors then run this function
    let x = computerPlay();
    if (x == 'SCISSORS'){
        console.log('TIE!');
        return ++tieCount;
    } else if (x == 'PAPER'){
        console.log('You win! SCISSORS beats PAPER!');
        return ++winCount;
    } else if (x == 'ROCK'){
        console.log('You Lose! ROCK beats SCISSORS!');
        return ++lossCount;
    } else {
        console.log('Something is wrong here.');
    }
}

function game(){
   do{
    let playerSelection = window.prompt('ROUND ' + roundCount + ': What is your selection?');
    playRound(playerSelection);
    console.log('Wins: ' + winCount + ' Losses: ' + lossCount + ' Ties: ' + tieCount);
    ++roundCount;
   }
   while ((winCount + lossCount) < 5);
   //return winner//
   if (winCount > lossCount){
       console.log('You are the WINNER!');
   } else if (lossCount > winCount){
       console.log('You are the LOSER.');
   } else {
       console.log('Something might be wrong here.');
   }
}