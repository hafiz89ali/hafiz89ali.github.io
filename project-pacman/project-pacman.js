// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");
const offsetLeft = pacman.offsetLeft;
const offsetTop = pacman.offsetTop;
console.log(offsetLeft);
const gamefieldWidth = document.querySelector("#gameField").offsetWidth;
const gamefieldHeight = document.querySelector("#gameField").offsetHeight;
console.log("Width of gamefield: " + gamefieldWidth);
console.log("Height of gamefield: " + gamefieldHeight);
const maxRight = gamefieldWidth - 120;
const maxBottom = gamefieldHeight - 135;
console.log("Maximum right: " + maxRight);
console.log("Maximum bottom: " + maxBottom);

// detect keypress
up.addEventListener("click", function () {
  console.log("Direction - Up");
  console.log("Offset top: " + pacman.offsetTop);
  console.log("Offset left: " + pacman.offsetLeft);
  // assign pacman styling
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  if (pacman.offsetTop < 0) {
    pacman.style.top = pacman.offsetTop;
  } else if (pacman.offsetTop > 0) {
    pacman.style.top = pacman.offsetTop - 50 + "px";
  }
});

down.addEventListener("click", function () {
  console.log("Direction - Down");
  console.log("Offset top: " + pacman.offsetTop);
  console.log("Offset left: " + pacman.offsetLeft);
  // assign pacman styling
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  if (pacman.offsetTop > maxBottom) {
    pacman.style.top = pacman.offsetTop;
  } else if (pacman.offsetTop < maxBottom) {
    pacman.style.top = pacman.offsetTop + 50 + "px";
  }
});

left.addEventListener("click", function () {
  console.log("Direction - Left");
  console.log("Offset top: " + pacman.offsetTop);
  console.log("Offset left: " + pacman.offsetLeft);
  // assign pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  if (pacman.offsetLeft < 0) {
    pacman.style.left = pacman.offsetLeft;
  } else if (pacman.offsetLeft > 0) {
    pacman.style.left = pacman.offsetLeft - 50 + "px";
  }
});

right.addEventListener("click", function () {
  console.log("Direction - Right");
  console.log("Offset top: " + pacman.offsetTop);
  console.log("Offset left: " + pacman.offsetLeft);
  // assign pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  if (pacman.offsetLeft > maxRight) {
    pacman.style.left = pacman.offsetLeft;
  } else if (pacman.offsetLeft < maxRight) {
    pacman.style.left = pacman.offsetLeft + 50 + "px";
  }
});

// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area
