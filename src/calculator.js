import { add } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calcInputs = document.querySelectorAll(".calc__input");
const calcResult = document.querySelector("#calc__long");
const calcClear = document.querySelector(".calc__delete");
const calcOperators = document.querySelectorAll(".calc__operator");

let numberOne = 0;
let numberTwo = 0;

// calculatorOutput.value = add(numberOne, numberTwo);

// EQUAL SIGN
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
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
    clearAll();
  }
  calcOperator.addEventListener("click", handleOperatorClick);
}

calcOperators.forEach(addOperatorEventListener);
