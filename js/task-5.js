function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const body = document.querySelector('body');
const span = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", handlerClick);

function handlerClick(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}