console.log("hello world!");

const keysArray = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`, `=`, `+`, `-`, `*`, `/`, `AC`, `C`, `M`, `sign`];
const screenDisplay_DOM = document.querySelector(`#screen-display`);
const keys_DOM = keysArray.map((DOM_ID) => document.getElementById(`${DOM_ID}`));

screenDisplay_DOM.textContent = ``;

keys_DOM.forEach((key, index) => {
    key.addEventListener(`click`, () => {
        let seeIfKeyIsNum = (index <= 10) ? true : false;
        if (seeIfKeyIsNum == true) screenDisplay_DOM.textContent += `${keysArray[index]}`;
        switch (index) {
            case 16: // if "AC" button is pressed, clear the screen display.
                screenDisplay_DOM.textContent = ``;
                break;
            case 17: // if "C" button is pressed, backspace 1 digit from the screen display.
                screenDisplay_DOM.textContent = screenDisplay_DOM.textContent.slice(0, screenDisplay_DOM.textContent.length - 1);
                break;
        };
    });
});
