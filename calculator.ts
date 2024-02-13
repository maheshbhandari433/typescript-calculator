// Define variables to keep track of calculator state
let equation: string = '';

// Function to update the display with the current equation
function updateDisplay() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = equation;
}

// Function to handle input of numbers
function inputNumber(num: number) {
    equation += num.toString();
    updateDisplay();
}

// Function to handle input of operators
function inputOperator(operator: string) {
    if (equation !== '') {
        equation += operator;
        updateDisplay();
    }
}

// Function to clear the display and reset calculator state
function clearDisplay() {
    equation = '';
    updateDisplay();
}

// Function to perform calculation based on the equation
function calculateResult() {
    if (equation !== '') {
        const result = eval(equation);
        equation = result.toString();
        updateDisplay();
    }
}

// Initialize the display
updateDisplay();
