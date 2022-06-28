console.log("hello world!");

const numberArray = [];
const operatorArray = [`+`, `-`, `*`, `/`];
const functionArray = [`=`, `AC`, `backspace`, `M`, `sign`];
for (let i = 0; i < 10; i++) numberArray.push(`` + i);
numberArray.push(`.`);

const operatorDisplay_DOM = document.querySelector(`#operator-display`);
const screenDisplay_DOM = document.querySelector(`#screen-display`);
const numButtons_DOM = numberArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));
const operatorButtons_DOM = operatorArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));
const functionButtons_DOM = functionArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));

let result = 0;
let operatorTriggered = false;
let firstValue = ``;
let secondValue = ``;
screenDisplay_DOM.textContent = ``;
operatorDisplay_DOM.textContent = ``;

let operatorIsClicked = (index) => {
    console.log(`operator ${operatorArray[index]} is clicked!`);
    operatorDisplay_DOM.textContent = operatorArray[index];
    operatorTriggered = true;
    firstValue = screenDisplay_DOM.textContent;
};

let calculateTheResult = () => {
    console.log(`= is clicked!`);
    secondValue = screenDisplay_DOM.textContent;
    firstValue = +firstValue;
    secondValue = +secondValue;
    switch (operatorDisplay_DOM.textContent) {
        case "+":
            result = firstValue + secondValue;
            screenDisplay_DOM.textContent = result.toString();
            break;
        case "-":
            resultt = firstValue - secondValue;
            screenDisplay_DOM.textContent = result.toString();
            break;
        case "*":
            result = firstValue * secondValue;
            screenDisplay_DOM.textContent = result.toString();
            break;
        case "/":
            result = firstValue / secondValue;
            screenDisplay_DOM.textContent = result.toString();
            break;
    };
    operatorDisplay_DOM.textContent = ``;
    result = 0;
};

numButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        if (operatorTriggered === true) {
            screenDisplay_DOM.textContent = ``;
            operatorTriggered = false;
        };
        screenDisplay_DOM.textContent += `${numberArray[index]}`;
    });
});

operatorButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        if (operatorDisplay_DOM.textContent !== null) calculateTheResult();
        operatorDisplay_DOM.textContent = `${operatorArray[index]}`;
        operatorIsClicked(index);
    });
});

functionButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        switch (index) {
            case 0: // = is clicked, run the calculation
                calculateTheResult();
                break;
            case 1: // AC is clicked, clear both operator and screen display
                operatorDisplay_DOM.textContent = ``;
                screenDisplay_DOM.textContent = ``;
                break;
            case 2: // backspace is clicked, backspace 1 digit from the screen display
                screenDisplay_DOM.textContent = screenDisplay_DOM.textContent.slice(0, screenDisplay_DOM.textContent.length - 1);
                break;
            case 4: // sign is clicked, check if value is positive, if not turn it into negative, vice versa
                console.log(typeof parseFloat(screenDisplay_DOM.textContent));
                screenDisplay_DOM.textContent *= -1;
                break;
        };
    });
});