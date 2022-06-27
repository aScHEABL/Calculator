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
screenDisplay_DOM.textContent = ``;

let operatorIsClicked = (index) => {
    console.log(`operator ${operatorArray[index]} is clicked!`);

};

let calculateTheResult = (index) => {
    console.log(`${functionArray[index]} is clicked!`);
};

numButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        screenDisplay_DOM.textContent += `${numberArray[index]}`;
    });
});

operatorButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        operatorDisplay_DOM.textContent = `${operatorArray[index]}`;
        operatorIsClicked(index);
    });
});

functionButtons_DOM.forEach((button, index) => {
    button.addEventListener(`click`, () => {
        switch (index) {
            case 0: // = is clicked, run the calculation
                calculateTheResult(index);
                break;
            case 1: // AC is clicked, clear both operator and screen display
                operatorDisplay_DOM.textContent = ``;
                screenDisplay_DOM.textContent = ``;
                break;
            case 2: // backspace is clicked, backspace 1 digit from the screen display
                screenDisplay_DOM.textContent = screenDisplay_DOM.textContent.slice(0, screenDisplay_DOM.textContent.length - 1);
                break;
            case 4: // sign is clicked, check if value is positive, if not turn it into negative, vice versa
                let str = [];
                str = screenDisplay_DOM.textContent.split(``);
                const seeIfNegative = (str[0] === "-") ? true : false;
                if (seeIfNegative === true) {
                    str.shift();
                    screenDisplay_DOM.textContent = str.join("");
                } else {
                    str.unshift("-");
                    screenDisplay_DOM.textContent = str.join("");
                };
                console.log(`sign is clicked! new value is: ${str}`);
                break;
        };
    });
});