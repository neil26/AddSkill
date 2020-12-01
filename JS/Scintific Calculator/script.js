class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();
    }
    clear(){
        this.currentOperand ='';
        this.previousOperand = '';
        this.operation = undefined;
    }
    cose(){
        let current=parseFloat(this.currentOperand);
        let curr = current * Math.PI/180;
        let value=Math.cos(curr);
        this.currentOperand=value;

    }
    tane(){
        let current=parseFloat(this.currentOperand);
        let curr = current * Math.PI/180;
        let value=Math.tan(curr);
        this.currentOperand=value;

    }
    sqrte(){
        let current=parseFloat(this.currentOperand);
        let value=Math.sqrt(current);
        this.currentOperand=value;

    }
    sine(){
        let current=parseFloat(this.currentOperand);
        let curr = current * Math.PI/180;
        let value=Math.sin(curr);
        this.currentOperand=value;

    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);

    }
    appendNumber(number){
        if(number==='.'&& this.currentOperand.includes('.')) return;
        this.currentOperand =this.currentOperand.toString() + number.toString();

    }
    chooseOperation(operation){
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
          this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute(){
        let computation;
        const prev=parseFloat(this.previousOperand);
        const current=parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch (this.operation){
            case '+': 
                computation=prev + current;
                break;
            case '-': 
                computation=prev - current;
                break;
            case '*': 
                computation=prev * current;
                break;
            case '÷':
                if(current === 0){alert("cannot Divide by Zero!!"); return}
                computation=prev / current;
            case '**':
                computation = prev ** current;
                break;
            default : 
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;

    }
}
const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalsButton=document.querySelector('[data-equals]'); 
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]'); 
const sinButton=document.querySelector('[data-sine]'); 
const cosButton=document.querySelector('[data-cos]'); 
const tanButton=document.querySelector('[data-tan]'); 
const sqrtButton=document.querySelector('[data-sqrt]'); 
const previousOperandTextElement=document.querySelector('[data-previous-operand]');  
const currentOperandTextElement=document.querySelector('[data-current-operand]');  
const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button =>{
     button.addEventListener('click',() =>{
          calculator.appendNumber(button.innerText);
          calculator.updateDisplay();
     })
})
operationButtons.forEach(button =>{
    button.addEventListener('click',() =>{
         calculator.chooseOperation(button.innerText);
         calculator.updateDisplay();
    })
})
equalsButton.addEventListener('click',button =>{
    calculator.compute();
    calculator.updateDisplay();

})

allClearButton.addEventListener('click',button =>{
    calculator.clear();
    calculator.updateDisplay();

})
deleteButton.addEventListener('click',button =>{
    calculator.delete();
    calculator.updateDisplay();

})
sinButton.addEventListener('click',button =>{
    calculator.sine();
    calculator.updateDisplay();
})
cosButton.addEventListener('click',button =>{
    calculator.cose();
    calculator.updateDisplay();
})
tanButton.addEventListener('click',button =>{
    calculator.tane();
    calculator.updateDisplay();
})
sqrtButton.addEventListener('click',button =>{
    calculator.sqrte();
    calculator.updateDisplay();
})




