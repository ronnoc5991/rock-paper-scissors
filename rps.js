var options = Array('ROCK' , 'PAPER' , 'SCISSORS');
document.getElementById("Rock").addEventListener("click", playerRock);
document.getElementById("Paper").addEventListener('click' , playerPaper);
document.getElementById("Scissors").addEventListener('click' , playerScissors);
document.getElementById("play").addEventListener('click', playclicked);

function playclicked(){
    console.log('play');
}

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
let roundCount = 1;

let wins = document.getElementById("wins");
wins.innerHTML = winCount;
let losses = document.getElementById("losses");
losses.innerHTML = lossCount;
let ties = document.getElementById("ties");
ties.innerHTML = tieCount;
let round = document.getElementById("roundnumber");
round.innerHTML = roundCount;


function computerPlay(){ //this randomizes the computers selection
    let = computerSelection = options[Math.floor(Math.random() *options.length)];
    return computerSelection;
}

function playerRock(){ //this plays upon rock being clicked
    let x = computerPlay();
   if (x == 'ROCK'){
        console.log('TIE!');
        tieCount++;
        updateTieCount(tieCount);
   } else if (x == 'PAPER'){
        console.log('You Lose!  PAPER beats ROCK!');
        lossCount++;
        updateLossCount(lossCount);
   } else if (x == 'SCISSORS'){
        console.log('You Win! ROCK beats SCISSORS!');
        winCount++;
        updateWinCount(winCount);
   } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function playerPaper(){ // this plays upon paper being clicked
    let x = computerPlay();
    if (x == 'PAPER'){
        console.log('TIE!');
        ++tieCount;
        updateTieCount(tieCount);
    } else if (x == 'ROCK'){
        console.log('You Win! PAPER beats ROCK!');
        ++winCount;
        updateWinCount(winCount);
    } else if (x == 'SCISSORS') {
        console.log('You Lose! SCISSORS beats PAPER!');
        ++lossCount;
        updateLossCount(lossCount);
    } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function playerScissors(){ //this plays upon scissors being clicked
    let x = computerPlay();
    if (x == 'SCISSORS'){
        console.log('TIE!');
        ++tieCount;
        updateTieCount(tieCount);
    } else if (x == 'PAPER'){
        console.log('You win! SCISSORS beats PAPER!');
        ++winCount;
        updateWinCount(winCount);
    } else if (x == 'ROCK'){
        console.log('You Lose! ROCK beats SCISSORS!');
        ++lossCount;
        updateLossCount(lossCount);
    } else {
        console.log('Something is wrong here.');
    }
    ++roundCount
    updateRoundCount(roundCount);
}

function updateRoundCount(){ //this updates the round count variable and reassigns the div on the page to the current round count
    round.innerHTML = roundCount;
}

function updateTieCount(){ //this updates the tiecount variable and reassigns the div on the page
    ties.innerHTML = tieCount;
}

function updateLossCount(){ //this updates the losscount variable and reassigns the div on the page
    losses.innerHTML = lossCount;
}

function updateWinCount(){ //this updates the wincount variable and reassigns the div on the page
    wins.innerHTML = winCount;
}