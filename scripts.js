console.log("hello world!");

const keysArray = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `=`, `+`, `-`, `*`, `/`, `AC`, `C`, `M`, `sign`];

const operatorDisplay_DOM = document.querySelector(`#operator-display`);
const screenDisplay_DOM = document.querySelector(`#screen-display`);
const keys_DOM = keysArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));

screenDisplay_DOM.textContent = ``;

let operatorIndex = 0;
let firstValue = 0;
let secondValue = 0;
let operatorIsClicked = false;

const operatorClicked = () => {
    console.log(`operator index is ${operatorIndex}`);
    operatorIsClicked = true;
};

const calculateTheResult = () => {
    
};

const ExecuteEventListner = () => {
    keys_DOM.forEach((key, index) => {
        key.addEventListener(`click`, () => {
            const seeIfKeyIsNum = (index <= 10) ? true : false;
            if (seeIfKeyIsNum === true) {
                screenDisplay_DOM.textContent += `${keysArray[index]}`
                if (operatorIsClicked === true) {
                    operatorIsClicked = false;
                    screenDisplay_DOM.textContent = ``;
                };            
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
                    operatorIndex = index;
                    operatorClicked();
                    break;
                case 13: // "-" button is pressed.
                    operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                    operatorIndex = index;
                    operatorClicked();
                    break;
                case 14: // "*" button is pressed.
                    operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                    operatorIndex = index;
                    operatorClicked();
                    break;
                case 15: // "/" button is pressed.
                    operatorDisplay_DOM.textContent = `${keysArray[index]}`;
                    operatorIndex = index;
                    operatorClicked();
                    break;
                case 11: // "=" button is pressed.
                    calculateTheResult();
                    break;
            };
        });
    });
}

ExecuteEventListner();