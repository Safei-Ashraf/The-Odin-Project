//Calcaulator logic:
function add(x,y) {
    return x+y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x-y;
}
function divide(x,y) {
    return x/y;
}
function operate (operator,x,y) {
    switch (operator) {
        case `-`:
            console.log('deduction');
            return x - y;
            break;
        case `+`:
            console.log('add');
            return x + y;
            break;
        case `*`:
            console.log('***');
            return x * y;
            break;
        case `/`:
            console.log('division');
            return x / y;
            break;
    
    }
}


const displayScreen = document.querySelector('.display');
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', ()=>{displayScreen.innerHTML = '';});
const buttons = document.querySelectorAll('.grid-cell');
buttons.forEach(button => {button.addEventListener('click',()=>{
displayScreen.textContent += button.value;
})});
