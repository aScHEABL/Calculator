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

screenDisplay_DOM.textContent = ``;

let operatorIsClicked = (index) => {
    console.log(`operator ${operatorArray[index]} is clicked!`);
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
        console.log(`${functionArray[index]} is clicked!`);
    });
});