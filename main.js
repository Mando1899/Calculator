const result = document.querySelector("#result");
const numBtns = document.querySelectorAll(".number");

let firsNum;
let secondNum;

function add(){
    return firsNum + secondNum;
}

function subtract(){
    return firsNum - secondNum;
}

function multiply(){
    return firsNum * secondNum;
}

function divide(){
    return firsNum / secondNum;
}

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        result.value = result.value + button.innerText;
    })
});