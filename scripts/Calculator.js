class Calculator{
    constructor(previousOperandElement,currentOperandElement){
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
        this.readyToReset = false;

    }
    clear(){
        this.currentOperand = '';
        this.previousOperand= '';
        this.operation = undefined;
    
    }

    deleteLastChar(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);

    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')){ return}
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    compute(operation){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        
        switch(this.operation){
            case `-`:
            computation = prev - current;
            break;
        case `+`:
        computation =  prev + current;
            break;
        case `*`:
        computation =  prev * current;
            break;
        case `/`:
        computation =  prev / current;
            break;  
        default:
        return;
        }
    this.currentOperand = computation;
    this.previousOperand = '';
    this.operation = undefined;
    this.readyToReset = true;
    }

    updateDisplay()
    {
        this.currentOperandElement.innerText = this.currentOperand;
        this.previousOperandElement.innerText = this.previousOperand;
        if(this.operation != null){
            this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`
        }
    }
    
    
}