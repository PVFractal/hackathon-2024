

var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");

let centerX = c.width / 2;
let centerY = c.height / 2;
let width = 400;
let height = 50;

let timer = -100;
const maxTimer = 600;
setInterval(function() {
  timer += 1;
  if (timer == 200) {
    makeAd('images/solaire ad.PNG', 1);
  }
  if (timer == maxTimer) {
    window.location.href = "categories.html";
  }

  ctx.clearRect(0, 0, c.width, c.height);

  ctx.fillStyle = 'rgb(0,255,0)';

  let barScale = (width * -1) * (Math.max(0, timer) / maxTimer);
  ctx.beginPath();
  ctx.rect(-width / 2 + centerX, -height / 2 + centerY, barScale, height);
  ctx.fill();

  ctx.beginPath();
  ctx.rect(-width / 2 + centerX, -height / 2 + centerY, width, height);
  ctx.stroke();


}, 10);


function makeAd(src, position) {
  const body = document.getElementById('mainBody');
  
  const newAd = document.createElement('div');
  newAd.style.border = "solid gray 2px";
  newAd.style.position = "absolute";
  newAd.style.width = "200px";
  newAd.style.height = "200px";

  if (position == 1) {
    newAd.style.top = "10%";
  }
  if (position == 2) {
    newAd.style.top = "35%";
  }
  if (position == 3) {
    newAd.style.top = "60%";
  }
  if (position == 4) {
    newAd.style.top = "10%";
  }
  if (position == 5) {
    newAd.style.top = "35%";
  }
  if (position == 6) {
    newAd.style.top = "60%";
  }

  if (position == 1 || position == 2 || position == 3) {
    newAd.style.right = "10px";
    newAd.animate(
      [
        // keyframes
        { transform: "translateX(100%)" },
        { transform: "translateX(0%)" },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
        easing: "ease-out",
      },
    );
  }

  if (position == 4 || position == 5 || position == 6) {
    newAd.animate(
      [
        // keyframes
        { transform: "translateX(-100%)" },
        { transform: "translateX(0%)" },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
        easing: "ease-out",
      },
    );
  }

  
  



  const newPic = document.createElement('img');
  newPic.src = src;
  newPic.alt = src;
  newPic.style.width = "200px";
  newPic.style.height = "200px";
  newPic.style.position = "absolute";
  newPic.style.left = "0px";

  const newX = document.createElement('p');
  newX.style.position = "absolute";
  newX.textContent = "X";
  newX.style.left = "0px";
  newX.style.top = "-16px";
  newX.style.color = "gray";
  newX.style.backgroundColor = "rgb(200,200,200)";
  newX.style.width = "20px";
  newX.style.height = "20px";
  newX.addEventListener('mouseover', function() {
    newX.style.backgroundColor = "rgb(220,220,220)";
    newX.style.cursor = "pointer";
  })
  newX.addEventListener('mouseout', function() {
    newX.style.backgroundColor = "rgb(200,200,200)";
    newX.style.cursor = "";
  })
  newX.addEventListener('click', function() {
    body.removeChild(newAd);
  })


  newAd.appendChild(newPic);
  newAd.appendChild(newX);
  
  body.appendChild(newAd);
}