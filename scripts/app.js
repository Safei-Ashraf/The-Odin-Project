//global vars DOM:
const mainElement = document.querySelector('main');
const makeGridBtn = document.querySelector('#submit-btn');
const resetBtn = document.querySelector('#reset-btn');
const container = document.querySelector('.container');


//to build grid:

makeGridBtn.addEventListener('click', ()=>{
    mainElement.innerHTML = ''; 
    const gridSize = document.querySelector('input');
    let inputValue = parseInt(gridSize.value);

    if(inputValue)
    {
    if(inputValue > 60){
        alert('Hey Hey, I said max value is 60 (-_-;) Now it will be a ZERO for you');
        
    }
    else{
        makeGrid(inputValue,inputValue);  
        //coloring process start after input, so the grid already exisit to use on DOM:
        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach(element => {
        element.addEventListener('mouseover',(e)=>{
            let redRatio = greenRatio = blueRatio = 255;
            redRatio = getRandomInt(255);
            blueRatio = getRandomInt(255);
            greenRatio = getRandomInt(255);
            e.target.style.background = `rgb(${redRatio},${greenRatio},${blueRatio})`
    });
});

    }
    }else{
        alert('Please stop drinking and add a size to start with (-_-;)')
        }
});

function makeGrid(height, width)
{
    for(let i = 1; i <= height; i++)
        {
            const row = document.createElement('div');
            row.classList.add('container');
            mainElement.appendChild(row);
            fillRow(row,width);
        }
}

function fillRow(row,width){
    for(let i = 1; i <= width; i++)
        {
            const column = document.createElement('div');
            column.classList.add('grid-cell');
            row.appendChild(column);
        }
}

//Reset Grid:
resetBtn.addEventListener('click',function resetGrid(e){
    e.preventDefault();
    mainElement.innerHTML = '';  
})
//Helper method:
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}