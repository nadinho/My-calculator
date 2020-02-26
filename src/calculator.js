const calculatorOutput = document.querySelector(".calculator__output");
const calcInputs = document.querySelectorAll(".calc__input");
const calcResult = document.querySelector("#calc__long");
const calcClear = document.querySelector(".calc__delete");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

// EQUAL SIGN
const numberOne = Number(calcInputs[4].innerText);
const numberTwo = Number(calcInputs[8].innerText);
// calculatorOutput.value = add(numberOne, numberTwo);
function handleClick() {
  calculatorOutput.value = divide(numberOne, numberTwo);
  console.log("clicked");
}
calcResult.addEventListener("click", handleClick);

// DELETE

function allClear() {
  calculatorOutput.value = 0;
}
calcClear.addEventListener("click", allClear);

4, 5, 6;
8, 9, 10;
12;
