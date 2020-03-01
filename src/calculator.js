import { calculate } from "./math.js";
import { addLog } from "./logs.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calcInputs = document.querySelectorAll(".calc__input");
const calcResult = document.querySelector("#calc__long");
const calcClear = document.querySelector(".calc__delete");
const calcOperators = document.querySelectorAll(".calc__operator");
const calcLogs = document.querySelector(".log");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

// EQUAL SIGN
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  const result = calculate(numberOne, numberTwo, operator);
  console.log("calculate");
  const log = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  addLog(log, calcLogs);
}
calcResult.addEventListener("click", handleResultClick);

// CLEAR BUTTON

function clearAll() {
  calculatorOutput.value = "";
}
calcClear.addEventListener("click", clearAll);

// DIGIT BUTTONS

function addInputEventListener(calcInput) {
  function handleInputClick() {
    calculatorOutput.value += calcInput.innerText;
  }

  calcInput.addEventListener("click", handleInputClick);
}
calcInputs.forEach(addInputEventListener);

// OPERATOR BUTTONS

function addOperatorEventListener(calcOperator) {
  function handleOperatorClick() {
    numberOne = Number(calculatorOutput.value); //Zwischenspeicher
    operator = calcOperator.innerText;
    console.log(operator);
    clearAll();
  }
  calcOperator.addEventListener("click", handleOperatorClick);
}
calcOperators.forEach(addOperatorEventListener);
