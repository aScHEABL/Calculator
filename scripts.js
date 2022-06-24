console.log("hello world!");

const keysArray = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `=`, `+`, `-`, `*`, `/`, `AC`, `backspace`, `M`, `sign`];

const operatorDisplay_DOM = document.querySelector(`#operator-display`);
const screenDisplay_DOM = document.querySelector(`#screen-display`);
const keys_DOM = keysArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));

screenDisplay_DOM.textContent = ``;
let firstNumberString = ``;
let secondNumberString = ``;
let result = 0;
let operatorIndex = ``
let operatorTriggered = false;
let ifMaximumDigitsExceeded = false;

keys_DOM.forEach((key, index) => {
    key.addEventListener(`click`, () => {

        let operatorIsClicked = () => {
            console.log(`Operator button is clicked!`);
            firstNumberString = screenDisplay_DOM.textContent;
            operatorIndex = index;
            operatorTriggered = true;
        };

        let calculateTheResult = () => {
            secondNumberString = screenDisplay_DOM.textContent;
            // convert firstNumberString and secondNumberString from string to number.
            let firstValue = +firstNumberString;
            let secondValue = +secondNumberString;
            // calculate the result.
            switch (keysArray[operatorIndex]) {
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
        if (ifMaximumDigitsExceeded === false) {
            const seeIfKeyIsNum = (index <= 10) ? true : false;
            if (seeIfKeyIsNum === true) {
                screenDisplay_DOM.textContent += `${keysArray[index]}`;
                ifMaximumDigitsExceeded = (screenDisplay_DOM.textContent.length === 9) ? true : false;
                if (ifMaximumDigitsExceeded === true) screenDisplay_DOM.textContent = `Error`;
                operatorTriggered = false;
            };
        }

        switch (index) {
            case 16: // "AC" button is pressed, clear both operator and screen display.
                operatorDisplay_DOM.textContent = ``;
                screenDisplay_DOM.textContent = ``;
                ifMaximumDigitsExceeded = false;
                break;
            case 17: // "⬅" button is pressed, backspace 1 digit from the screen display.
                screenDisplay_DOM.textContent = screenDisplay_DOM.textContent.slice(0, screenDisplay_DOM.textContent.length - 1);
                break;
            case 12: // "+", "-", "*", "/" button is pressed.
            case 13:
            case 14:
            case 15:
                operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                operatorIsClicked();
                break;
            case 11: // "=" button is pressed.
                calculateTheResult();
                break;
        };
    });
});