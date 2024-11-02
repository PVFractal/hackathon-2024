

// Canvas stuff: sparkles
var c = document.getElementById("sparkles");
var ctx = c.getContext("2d");

const sizeX = 20;
const sizeY = 40;

function drawSparkle(x, y, scale) {
  let width = sizeX * scale;
  let height = sizeY * scale;
  ctx.fillStyle = 'rgb(255,255,0)';
  ctx.beginPath();
  ctx.moveTo(x,y + height / 2);
  ctx.lineTo(x + width/2, y);
  ctx.lineTo(x, y - height / 2);
  ctx.lineTo(x - width/2, y);
  ctx.lineTo(x,y + height / 2);
  ctx.fill();
} 

function randRange(min, max) {
  let range = max - min;
  return Math.floor(Math.random() * range) + min;
}

let sparkles = [];

for (let i = 0; i < 20; i++) {
  let newSparkle = [randRange(40, c.width - 40), randRange(40, c.height - 40), Math.random()];
  sparkles.push(newSparkle);
}

// for (let i = 0; i < sparkles.length; i++) {
//   console.log(sparkles[i]);
//   drawSparkle(sparkles[i][0], sparkles[i][1], sparkles[i][2]);
// }

let timer = 0;
const spakleSpeed = 100;

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  timer += 1;
  for (let i = 0; i < sparkles.length; i++) {
    let sparkleScale = (Math.cos((sparkles[i][2] * 2 * Math.PI) + timer / spakleSpeed) + 1) / 2;
    drawSparkle(sparkles[i][0], sparkles[i][1], sparkleScale);
  }
}
setInterval(draw, 1);


// HTML stuff

const mainBody = document.getElementById('mainBody');
const darkModeButton = document.getElementById('darkMode');
const slider = document.getElementById('myRange');
const label = document.getElementById('labe');
const title = document.getElementById('title');
const startButton = document.getElementById('startClicker');
const piePic = document.getElementById('pie');
const skulls = document.querySelectorAll('.skull');
const metalTitle = document.getElementById('metalTitle');
const metalStart = document.getElementById('metalStart');

let darkMode = false;

darkModeButton.addEventListener('click', () => {
  if (darkMode) {
    darkMode = false;
    changeToLightMode();
  } else {
    darkMode = true;
    changeToDarkMode();
  }
});

function changeToDarkMode() {
  darkModeButton.style.color = 'white';
  darkModeButton.textContent = "Light Mode";
  slider.style.visibility = 'visible';
  mainBody.style.backgroundColor = 'black';
  skulls.forEach(skull => {
    skull.style.visibility = 'visible';
  });
  metalTitle.style.visibility = 'visible';
  metalStart.style.visibility = 'visible';
  label.style.visibility = 'visible';


  c.style.visibility = 'hidden';
  title.style.visibility = 'hidden';
  startButton.style.visibility = 'hidden';
  piePic.style.visibility = 'hidden';
}
function changeToLightMode() {
  darkModeButton.style.color = 'black';
  darkModeButton.textContent = "Dark Mode";
  slider.style.visibility = 'hidden';
  mainBody.style.backgroundColor = 'rgb(255, 245, 232)';
  skulls.forEach(skull => {
    skull.style.visibility = 'hidden';
  });
  metalTitle.style.visibility = 'hidden';
  metalStart.style.visibility = 'hidden';
  label.style.visibility = 'hidden';

  startButton.style.visibility = 'visible';
  c.style.visibility = 'visible';
  title.style.visibility = 'visible';
  piePic.style.visibility = 'visible';
}

slider.oninput = function() {
  skulls.forEach(skull => {
    skull.style.opacity = slider.value / 100;
  });
  let wordNum = Math.floor(slider.value / 20) + 1;
  metalTitle.src = `images/words/word${wordNum}.png`;
  metalStart.src = `images/words/start${wordNum}.PNG`;
}


startButton.onclick = function() {
  window.location.href = "loading.html";
}


