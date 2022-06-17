const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
let currentOperation = '';
const btnAllClear = document.querySelector('.all-clear');
const btnDelete = document.querySelector('.delete');
const btnNumbers = document.querySelectorAll('.number');
const btnOperations = document.querySelectorAll('.operations');
const btnDot = document.querySelector(".dot");
const btnEquals = document.querySelector('.equals');
btnDelete.addEventListener('click', deleteLast)
btnAllClear.addEventListener('click', allClear)
// btnNumbers.forEach( element => addEventListener('click', addNumbers(element)) )

btnNumbers.forEach(element => {
    element.addEventListener('click', () => {
        addNumbers(element)
    })
});

btnOperations.forEach(element => {
    element.addEventListener('click', () => {
        addOperations(element)
    })
});

btnEquals.addEventListener('click', equalFunc)
btnDot.addEventListener('click', addDot)

function allClear() {
    previousOperandTextElement.innerHTML = '';
    currentOperandTextElement.innerHTML = '';
}

function deleteLast() {
    currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0, -1)
}


function addNumbers(element) {
    if (
        // element.innerHTML === '0' &&
        currentOperandTextElement.innerHTML[0] === '0'&&
        !currentOperandTextElement.innerHTML.includes('.')) {
        currentOperandTextElement.innerHTML = `${currentOperandTextElement.innerHTML.toString()}.${element.innerHTML}`
        return
    }
   
    currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.toString() + element.innerHTML
}

function addOperations(operator) {
    if (currentOperandTextElement.innerHTML && previousOperandTextElement.innerHTML) {equalFunc()}
    currentOperation = operator.innerHTML;
    if (currentOperandTextElement.innerHTML) {
        if(currentOperandTextElement.innerHTML.slice(-1) === '.') {
            currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0, -1)}

        previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + operator.innerHTML
        currentOperandTextElement.innerHTML = '';
    } else {
        if (previousOperandTextElement.innerHTML) {
            previousOperandTextElement.innerHTML = previousOperandTextElement.innerHTML.slice(0, -1) + currentOperation
        }
    }
}

function equalFunc() {
    if (previousOperandTextElement.innerHTML && currentOperandTextElement.innerHTML) {
        let num1 /*TODO*/ = parseFloat(currentOperandTextElement.innerHTML);
        let num2 /*TODO*/ = parseFloat(previousOperandTextElement.innerHTML.slice(0, -1));
        console.log('num1', num1, 'num2', num2)
        let resoult = NaN;
        switch (currentOperation) {
            case '÷':
                resoult = num2 / num1
                break
            case '*':
                resoult = num2 * num1
                break
            case '+':
                resoult = num2 + num1
                break
            case '-':
                resoult = num2 - num1
                break
            default :
                console.log('unnoun operation');

        }
        currentOperandTextElement.innerHTML = resoult.toString();
        previousOperandTextElement.innerHTML = '';
    }
}

function addDot() {
    if (!currentOperandTextElement.innerHTML) {
        currentOperandTextElement.innerHTML = '0.'
    } else {
        if (!currentOperandTextElement.innerHTML.includes('.')) {
            currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + '.'
        }
    }
}
