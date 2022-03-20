let color1 = document.querySelector('.color1');
let color2 = document.getElementById('color2');
let body = document.getElementById('gradient');
let css = document.getElementById('h3');
let randomColor = document.getElementById('random');
let autoColor = document.getElementById('auto');
let stopAuto = document.getElementById('stop')


function setGradient() {
body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
css.textContent = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
};

function random() {
    const randomColor = `#`+ (Math.random() * 0xFFFFFF << 0).toString(16);
    return randomColor
};

function randomGradient() {
    color1.value = random();
    color2.value = random();
    setGradient();
};

let interval;

function auto() { 
    interval = setInterval(randomGradient, 2000);
}


function stop() {
    clearInterval(interval);

    interval = null;     
};

setGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomColor.addEventListener('click', randomGradient);

autoColor.addEventListener('click', auto);

stopAuto.addEventListener('click', stop)
