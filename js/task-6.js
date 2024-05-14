function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const container = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const desrtoyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

desrtoyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  
  let size = 30;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const color = getRandomHexColor();

    box.style.backgroundColor = color;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    boxesContainer.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');

  boxesContainer.innerHTML = '';
}