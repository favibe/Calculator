
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) return "Math Error"
    return a / b;
}

function pow(a, b) {
    return a ** b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case  "-":
            return sub(a, b);
        case "*":
            return mul(a, b);
        case "/":
            return div(a, b);
        case "**":
            return pow(a, b);
        default:
            return "";
    }
}


let fisrtNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = "";

const calculator = document.querySelector(".container");
const display = document.querySelector(".display");
const numberButton = document.querySelector(".number");
const operatorButton = document.querySelector(".operator");
const delButton = document.querySelector(".del");
const clearButton = document.querySelector(".clear");
const resultButton = document.querySelector(".result");


