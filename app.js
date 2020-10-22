// 1-generate CPU random answer 
// 2-Take user input
// 3-Handle user input to be case senstive
// 4-compare 2 inputs from user vs cpu 
// 5-return winner 
// 6-record round scores
// 7-set number of rounds needed to define a big winner 
// 8-return the big winner!


function computerPlay(){
    const moves = ['rock','paper','scissors']
    return moves[randomInteger(0,2)];
};
function humanPlay(){};
function playRound(playerSelection, computerSelection){
    //return winner
}

const playerSelection ='rock' //input from user ;
const computerSelection = computerPlay(); //returned from that func
//helper method:
/*https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range*/
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }