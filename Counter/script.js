const counter = document.querySelector('.counter__number');
const btnMinus = document.querySelector('.btn-orange');
const btnReset = document.querySelector('.btn-grey');
const btnPlus = document.querySelector('.btn-green');

// Current value of counter
let currentValue = 0;

//checking number and setting counter color accordingly.
const setColor = function () {
  if (currentValue > 0) {
    counter.style.color = '#249901';
  } else if (currentValue < 0) {
    counter.style.color = '#fd5e13';
  } else counter.style.color = '#fff';
};

// Resetting value of counter to 'ZERO'.
const reset = () => {
  currentValue = 0;
  counter.textContent = currentValue;
  setColor();
};

// Increasing the value of counter by 1.
const increase = () => {
  ++currentValue;
  counter.textContent = currentValue;

  setColor();
};

// Decreasing the value of counter by 1.
const decrease = () => {
  --currentValue;
  counter.textContent = currentValue;
  setColor();
};

// Listning events
btnReset.addEventListener('click', reset);
btnPlus.addEventListener('click', increase);
btnMinus.addEventListener('click', decrease);
