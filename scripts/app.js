//Calcaulator logic:
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
resetBtn.addEventListener('click', ()=>{});
const buttons = document.querySelectorAll('.grid-cell');
buttons.forEach(button => {button.addEventListener('click',()=>{
    if(button.value === 'reset')
    {
        displayScreen.innerHTML = '<span id="starter" class="animated flash">&#9833;</span>';
    }
    else if(button.value === 'delete')
    {
        let str = displayScreen.textContent;
        let newstr = str.substring(0,str.length-1);
        displayScreen.textContent = newstr;
    }
    else if(button.value ==='.'){
        const decimalBtn = document.querySelector('#decimal');
        let str = displayScreen.textContent;
        let search = str.indexOf('.');
        console.log(search)
        if(search===-1){
            displayScreen.innerHTML += `<span>${button.value}</span>`;
            decimalBtn.disabled = true;
        }
    }
    // else if(){}
    // else if(){}
    // else if(){}
    else{
        
        displayScreen.innerHTML += `<span>${button.value}</span>`;
        if(Number(button.value) >= 0 && Number(button.value) <= 9){
            console.log(`${button.value} is a digit`)
        }      
    }
})});
