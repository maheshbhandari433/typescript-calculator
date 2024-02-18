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

// Add event listeners for button clicks
document.getElementById('clearBtn')?.addEventListener('click', () => clearDisplay());
document.getElementById('num7Btn')?.addEventListener('click', () => inputNumber(7));
document.getElementById('num8Btn')?.addEventListener('click', () => inputNumber(8));
document.getElementById('num9Btn')?.addEventListener('click', () => inputNumber(9));
document.getElementById('divideBtn')?.addEventListener('click', () => inputOperator('/'));
document.getElementById('num4Btn')?.addEventListener('click', () => inputNumber(4));
document.getElementById('num5Btn')?.addEventListener('click', () => inputNumber(5));
document.getElementById('num6Btn')?.addEventListener('click', () => inputNumber(6));
document.getElementById('multiplyBtn')?.addEventListener('click', () => inputOperator('*'));
document.getElementById('num1Btn')?.addEventListener('click', () => inputNumber(1));
document.getElementById('num2Btn')?.addEventListener('click', () => inputNumber(2));
document.getElementById('num3Btn')?.addEventListener('click', () => inputNumber(3));
document.getElementById('subtractBtn')?.addEventListener('click', () => inputOperator('-'));
document.getElementById('num0Btn')?.addEventListener('click', () => inputNumber(0));
document.getElementById('equalBtn')?.addEventListener('click', () => calculateResult());
document.getElementById('addBtn')?.addEventListener('click', () => inputOperator('+'));
