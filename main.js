const output = document.querySelector("#result");
const numBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");

let operations = [];


function operate() {
    if (operations.length === 1) {
        result = operations[0]['value'];
    } else {
        operations[1]['value'] = operations[0]['value'] + operations[1]['value'];
        operations.shift();
    }
}

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        output.value = output.value + button.innerText;
    })
});

operationBtns.forEach((button) => {
    button.addEventListener('click', () => {
        operations.push({'value': Number(output.value), 'operationType': button.id});
        operate();
        output.value = '';
        if (button.id === 'equals') output.value = operations[0]['value'];
        console.log(operations);
    })
});