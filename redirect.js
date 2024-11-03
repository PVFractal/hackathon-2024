

let timer = 0
const interval = setInterval(function() {
  timer += 1;

  if (timer == 3) {
    window.location.href = "shoe.html";
  }

}, 1000);