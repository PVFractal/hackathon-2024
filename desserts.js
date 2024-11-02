

let timer = 0;

function startInterval() {
  const interval = setInterval(function() {
    timer += 1;
    if (timer == 3) {
      makeScreenAd('images/dessert-recipes.PNG');
      clearInterval(interval);
    }
    if (timer == 5) {
      makeAd('images/patagonia2.PNG', 2);
    }
    if (timer == 8) {
      makeAd('images/patagonia3.PNG', 4);
    }
    if (timer == 11) {
      makeScreenAd('images/pug.PNG');
    }
  }, 1000);
}

startInterval();


const categories = document.querySelectorAll('.recipe');

categories.forEach(catogory =>
  catogory.addEventListener('click', function() {
    window.location.href = "desserts.html";
  })
);


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

function makeScreenAd(src) {
  const body = document.getElementById('mainBody');
  
  const newDark = document.createElement('div');
  newDark.style.backgroundColor = "rgba(0,0,0, 0.75)";
  newDark.style.width = "100%";
  newDark.style.height = "100%";
  newDark.style.left = "0";
  newDark.style.top = "0";
  newDark.style.position = "absolute";

  const newAd = document.createElement('div');
  newAd.style.border = "solid gray 2px";
  newAd.style.position = "absolute";
  newAd.style.left = "50%";
  newAd.style.top = "50%";
  newAd.style.transform = "translate(-50%, -50%)";
  newAd.style.width = "500px";
  newAd.style.height = "500px";

  const newPic = document.createElement('img');
  newPic.src = src;
  newPic.alt = src;
  newPic.style.width = "500px";
  newPic.style.height = "500px";
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
    startInterval();
    body.removeChild(newDark);
  })

  newDark.animate(
    [
      // keyframes
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      // timing options
      duration: 1000,
      iterations: 1,
      easing: "linear",
    },
  );


  newAd.appendChild(newPic);
  newAd.appendChild(newX);
  
  newDark.appendChild(newAd);
  body.appendChild(newDark);
}

