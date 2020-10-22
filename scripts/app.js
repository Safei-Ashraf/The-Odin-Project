// 1-generate CPU random answer DONE
// 2-Take user input
// 3-Handle user input to be case senstive
// 4-compare 2 inputs from user vs cpu 
// 5-return winner 
// 6-record round scores
// 7-set number of rounds needed to define a big winner 
// 8-return the big winner!

const cpuChoice = document.querySelector('.cpu-choice');
const computerPlay =()=>{
    const moves = ['Rock','Paper','Scissors']
    const selecteCPU = moves[randomInteger(3)];
    cpuChoice.innerHTML = choiceDisplay(selecteCPU);
    return selecteCPU;
};
//read move from dom:
const selectBtn = document.querySelector('#move-btn');
const humanChoice = document.querySelector('.human-choice');


selectBtn.addEventListener('click',function(){
    const humanMove = document.getElementById('move').value;
    humanChoice.innerHTML = choiceDisplay(humanMove);
    playRound(humanMove, computerPlay());
})

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
        tie();
    }
    //Rock
    if(playerSelection === 'Rock'&& computerSelection === 'Scissors')
    {
        humanWon();
    }
    if(playerSelection === 'Rock'&& computerSelection === 'Paper')
    {
        cpuWon();
    }
    //Paper
    if(playerSelection === 'Paper'&& computerSelection === 'Scissors')
    {
        cpuWon();
    }
    if(playerSelection === 'Paper'&& computerSelection === 'Rock')
    {
        humanWon();
    }
    //Scissors
    if(playerSelection === 'Scissors'&& computerSelection === 'Rock')
    {
        cpuWon();
    }
    if(playerSelection === 'Scissors'&& computerSelection === 'Paper')
    {
        
        humanWon();
    }
}






//helper method:
function randomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let laughAudio = document.getElementById("audioID");

//Example of an HTML Audio/Video Method

function playAudio() {
    laughAudio.play();
}
