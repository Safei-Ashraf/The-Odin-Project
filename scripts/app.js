const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-reset]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperandElement = document.querySelector('[data-previous-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandElement, currentOperandElement);

numberBtns.forEach( button => button.addEventListener('click',()=>{
    if(calculator.previousOperand === '' && calculator.currentOperand !== '' && calculator.readyToReset)
    {
        calculator.currentOperand = "";
        calculator.readyToReset = false;
    }
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
} ));

operationBtns.forEach( button => button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
} ));

equalBtn.addEventListener('click', () =>{
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', () =>{
    calculator.clear();
    calculator.updateDisplay();
})
deleteBtn.addEventListener('click', () =>{
    calculator.deleteLastChar();
    calculator.updateDisplay();
})
