const resultsContainer = document.querySelector('.final-result');
let humanWin = 0;
let cpuWin = 0;
const humanScore = document.getElementById('human-score');
const cpuScore = document.getElementById('cpu-score');

function tie(){
    console.log('Tie');
    resultsContainer.className = '';
    resultsContainer.classList.add('tie-class','final-result');
    resultsContainer.innerHTML = `
    What? A Tie! Come Again Human...`
}
function cpuWon(){
    cpuWin++;
    cpuScore.textContent = cpuWin;
    resultsContainer.className = '';
    resultsContainer.classList.add('cpu-won-class','final-result');
    resultsContainer.innerHTML = `
    Human LOST,HAHAHA! Kneel Before My Greatness!`
}
function humanWon(){
    humanWin++;
    humanScore.textContent = humanWin;
    resultsContainer.className = '';
    resultsContainer.classList.add('human-won-class','final-result');
    resultsContainer.innerHTML = `
    Human WON, I Was Not Even calculating..01000110 01010101...`;
}
