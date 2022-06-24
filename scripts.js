console.log("hello world!");

const keysArray = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `=`, `+`, `-`, `*`, `/`, `AC`, `C`, `M`, `sign`];

const operatorDisplay_DOM = document.querySelector(`#operator-display`);
const screenDisplay_DOM = document.querySelector(`#screen-display`);
const keys_DOM = keysArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));

screenDisplay_DOM.textContent = ``;
let firstNumberString = ``;
let secondNumberString = ``;
let result = 0;
let operatorIndexFromKeysArray = ``
let operatorTriggered = false;

keys_DOM.forEach((key, index) => {
    key.addEventListener(`click`, () => {

        let operatorIsClicked = (operatorIndex) => {
            console.log(`Operator button is clicked!`);
            firstNumberString = screenDisplay_DOM.textContent;
            operatorIndexFromKeysArray = operatorIndex;
            operatorTriggered = true;
        };

        let calculateTheResult = () => {
            secondNumberString = screenDisplay_DOM.textContent;
            // convert firstNumberString and secondNumberString from string to number.
            let firstValue = +firstNumberString;
            let secondValue = +secondNumberString;
            // calculate the result.
            switch (keysArray[operatorIndexFromKeysArray]) {
                case "+" :
                console.log(`+ calculation`);
                result = firstValue + secondValue;
                console.log(`result is ${result}`);
                break;
                case "-" :
                console.log(`- calculation`);
                result = firstValue - secondValue;
                break;
                case "*" :
                console.log(`* calculation`);
                result = firstValue * secondValue;
                break;
                case "/" :
                console.log(`/ calculation`);
                result = firstValue / secondValue;
                break;
            }
            operatorDisplay_DOM.textContent = ``;
            screenDisplay_DOM.textContent = `${result}`;
            console.log(result);
            return result;
        };

        if (operatorTriggered === true) {
            screenDisplay_DOM.textContent = ``;
        };

        const seeIfKeyIsNum = (index <= 10) ? true : false;
        if (seeIfKeyIsNum === true) {
            screenDisplay_DOM.textContent += `${keysArray[index]}`;
            operatorTriggered = false;
        };

        switch (index) {
            case 16: // "AC" button is pressed, clear both operator and screen display.
                operatorDisplay_DOM.textContent = ``;
                screenDisplay_DOM.textContent = ``;
                break;
            case 17: // "C" button is pressed, backspace 1 digit from the screen display.
                screenDisplay_DOM.textContent = screenDisplay_DOM.textContent.slice(0, screenDisplay_DOM.textContent.length - 1);
                break;
            case 12: // "+" button is pressed.
                operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                operatorIsClicked(index);
                break;
            case 13: // "-" button is pressed.
                operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                operatorIsClicked(index);
                break;
            case 14: // "*" button is pressed.
                operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                operatorIsClicked(index);
                break;
            case 15: // "/" button is pressed.
                operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                operatorIsClicked(index);
                break;
            case 11: // "=" button is pressed.
                calculateTheResult();
                break;
        };
    });
});