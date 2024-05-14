
const form = document.querySelector('.login-form');

form.addEventListener("submit", handlerSub);

function handlerSub(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email.trim() === "" && password.trim() === "") {
        alert('All form fields must be filled in');
    }
    event.target.reset();
}
