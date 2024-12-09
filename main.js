const output = document.querySelector("#result");
const numBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");

let operations = [];
let value = '';
let shouldDelete = false;


function operate() {
    if (operations.length === 1) {
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
        if(shouldDelete) {
            output.value = ''
            shouldDelete = false;
        }
        value = value + button.innerText;
        output.value = output.value + button.innerText;
    })
});

operationBtns.forEach((button) => {
    button.addEventListener('click', () => {
        operations.push({'value': Number(value), 'operationType': button.id});
        operate();
        value = '';
        output.value = operations[0]['value'];
        if (button.id === 'equals') value = operations[0]['value'];
        shouldDelete = true;
    })
});