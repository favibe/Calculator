
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
        case "x":
            return mul(a, b);
        case "/":
            return div(a, b);
        case "^":
            return pow(a, b);
        default:
            return "";
    }
}


let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = "";

const calculator = document.querySelector(".container");
const display = document.querySelector(".display");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const delButton = document.querySelector(".del");
const clearButton = document.querySelector(".clear");
const resultButton = document.querySelector(".result");

function appendToDisplay(content) {
    //number limit on screen
    if (display.textContent.length >= 12 && !shouldResetDisplay) return; 
    // reset display
    if (display.textContent === "0" || shouldResetDisplay) {
        display.textContent = "";
        shouldResetDisplay = false;
    }
    // prevent multiple decimals
    if (content === "." && display.textContent.includes(".")) return;

    //append display
    display.textContent += content;
}

numberButton.forEach(button => {
  button.addEventListener("click", () => appendToDisplay(button.textContent));
});


// operator function
function setOperator(operator) {
    if (currentOperator !== ""){
         evaluate();
        }
    firstNumber = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}


//operator button
operatorButton.forEach(button => {
    button.addEventListener("click", () => setOperator(button.textContent));
});

//result button

function evaluate() {
    if (currentOperator === "" || shouldResetDisplay) return;
    secondNumber = display.textContent;
    let  result = operate(currentOperator, firstNumber, secondNumber);
    if (typeof result === "number") {
        result = Math.round(result*1000) / 1000;
    }

    display.textContent = result;
    firstNumber = result;
    currentOperator = "";
}
resultButton.addEventListener("click", evaluate);

//claer button
clearButton.addEventListener("click", clear);
function clear () {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    shouldResetDisplay = false;
}
