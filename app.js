// 1-generate CPU random answer DONE
// 2-Take user input
// 3-Handle user input to be case senstive
// 4-compare 2 inputs from user vs cpu 
// 5-return winner 
// 6-record round scores
// 7-set number of rounds needed to define a big winner 
// 8-return the big winner!


const computerPlay =()=>{
    const moves = ['Rock','Paper','Scissors']
    const selecteCPU = moves[randomInteger(3)];
    return selecteCPU;
};
//read move from dom:
const selectBtn = document.querySelector('#move-btn');

selectBtn.addEventListener('click',function(){
    const humanMove = document.getElementById('move').value;
    playRound(humanMove, computerPlay());
    console.log(humanMove);
})
function humanPlay(){};
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
        console.log('Tie');
        return 1;
    }
    //Rock
    if(playerSelection === 'Rock'&& computerSelection === 'Scissors')
    {
        console.log('You Win');
    }
    if(playerSelection === 'Rock'&& computerSelection === 'Paper')
    {
        console.log('HAHAHAHA You lose');
    }
    //Paper
    if(playerSelection === 'Paper'&& computerSelection === 'Scissors')
    {
        console.log('HAHAHAHA You lose');
    }
    if(playerSelection === 'Paper'&& computerSelection === 'Rock')
    {
        console.log('You Win');
    }
    //Scissors
    if(playerSelection === 'Scissors'&& computerSelection === 'Rock')
    {
        console.log('HAHAHAHA You lose');
    }
    if(playerSelection === 'Scissors'&& computerSelection === 'Paper')
    {
        console.log('You Win');
    }
}



//helper method:
function randomInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}