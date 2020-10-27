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

function clearInput(target)
{
    target.innerHTML = '';
}
