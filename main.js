const output = document.querySelector("#output");
const operationDisplay = document.querySelector("#operationDisplay");
const numBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const deleteBtn = document.querySelector("#delete");
const cleatBtn = document.querySelector('#clear');

let operations = [];
let shouldDelete = false;

cleatBtn.addEventListener('click', () =>{
    output.innerText = '0';
    operationDisplay.innerText = '';
    operations = [];
});

deleteBtn.addEventListener('click', () => {
    output.innerText = output.innerText.slice(0, -1);
});

function operate() {
    if (operations.length <= 1) {
        result = operations[0]['value'];
    } else {
        if (operations[0]['operationType'] === 'add') {
            operations[1]['value'] = operations[0]['value'] + operations[1]['value'];  
        } else if (operations[0]['operationType'] === 'subtract') {
            operations[1]['value'] = operations[0]['value'] - operations[1]['value'];
        } else if (operations[0]['operationType'] === 'multiply') {
            operations[1]['value'] = operations[0]['value'] * operations[1]['value'];
        } else if (operations[0]['operationType'] === 'divide') {
            operations[1]['value'] = operations[0]['value'] / operations[1]['value'];
        } 
        operations.shift();
    } 
}


numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if(shouldDelete || (output.innerText === '0' && button.id !== 'dPoint')) {
            output.innerText = '';
            shouldDelete = false;
        }
        if (!(output.innerText.includes('.') && button.id === 'dPoint')) output.innerText = output.innerText + button.innerText;
    })
});

operationBtns.forEach((button) => {
    button.addEventListener('click', () => {
        operations.push({'value': Number(output.innerText), 'operationType': button.id});
        operate();
        if (button.id !== 'equals') operationDisplay.innerText = operations[0]['value']  + button.innerText;

        output.innerText = operations[0]['value'];
        if (button.id === 'equals') {
            value = operations[0]['value']
            operationDisplay.innerText = '';
        }
        shouldDelete = true;
    })
});