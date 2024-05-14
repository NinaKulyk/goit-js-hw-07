
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", handlerInput);

function handlerInput(event) {
    const username = event.target.value.trim();
    output.textContent = username !== "" ? username : "Anonymous";
}
