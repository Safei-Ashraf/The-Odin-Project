//create 16 * 16 grid:
const mainElement = document.querySelector('main');
const container = document.querySelector('.container');
//for height we gonna create a new div with class container
//for width we gonna create a new div with class grid-cell
makeGrid(5,5);
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
//Event on each cell of the grid on hover to color it randomly:
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

//Helper method:
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}