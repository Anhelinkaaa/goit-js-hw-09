const btnstart = document.querySelector('button[data-start]');
const btnstop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnstart.addEventListener('click', startfunction);
btnstop.addEventListener('click', stoptfunction);

let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function startfunction() {
    btnstart.disabled = true;
    btnstop.disabled = false;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stoptfunction() {
btnstart.disabled = false;
    btnstop.disabled = true;
    clearInterval(timerId)
};