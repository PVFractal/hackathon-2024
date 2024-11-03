

let timer = 0;
const interval = setInterval(function() {
  timer += 1;

  if (timer == 1) {
    window.location.href = "redirect.html";
  }

}, 1000);