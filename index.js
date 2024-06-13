window.addEventListener("load", onLoad);
function onLoad() {
  `automatically update the copyright date in the footer section to the current year.`;
  const copyrightElement = document.getElementById("copyright");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright &copy; ${currentYear} All rights reserved. Built and maintained by Tasha Fernandez-Ross`;
    copyrightElement.innerHTML = copyrightText;
  }
}

let buttonColors = ["green", "yellow", "red", "blue"];
let comPattern = [];
let userPattern = [];
let startGame = false;
let gameLevel = 0;

function randomNum() {
  // generate a random number between 0 and 3
  return Math.floor(Math.random() * 4);
}

function playGreen() {
  $(".greenBtn").toggleClass("elementFlash");
  setTimeout(function () {
    $(".greenBtn").removeClass("elementFlash");
  }, 200);
  new Audio("./sound/green.mp3").play();
}

function playYellow() {
  $(".yellowBtn").toggleClass("elementFlash");
  setTimeout(function () {
    $(".yellowBtn").removeClass("elementFlash");
  }, 200);
  new Audio("./sound/yellow.mp3").play();
}

function playRed() {
  $(".redBtn").toggleClass("elementFlash");
  setTimeout(function () {
    $(".redBtn").removeClass("elementFlash");
  }, 200);
  new Audio("./sound/red.mp3").play();
}

function playBlue() {
  $(".blueBtn").toggleClass("elementFlash");
  setTimeout(function () {
    $(".blueBtn").removeClass("elementFlash");
  }, 200);
  new Audio("./sound/blue.mp3").play();
}

function randomColor() {
  gameLevel++;
  $("p").html("Level " + gameLevel);

  let randomIndex = randomNum();
  let randomChosenColor = buttonColors[randomIndex];
  comPattern.push(randomChosenColor);

  comPattern.forEach(function (color, index) {
    setTimeout(function () {
      if (color == "green") {
        playGreen();
      } else if (color == "yellow") {
        playYellow();
      } else if (color == "red") {
        playRed();
      } else {
        playBlue();
      }
    }, 500 * index);
  });
  // reset user pattern for next round
  userPattern = [];
}

function gameOver() {
  $("h1").html("Game Over");
  $("h2").html("Press Any Key or Touch Screen To Start");
  $("body").addClass("gameOver");
  new Audio("./sound/wrong.mp3").play();

  comPattern = [];
  userPattern = [];
  startGame = false;
  gameLevel = 0;
}

function comparePattern() {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== comPattern[i]) {
      gameOver();
      return;
    }
  }

  if (userPattern.length === comPattern.length) {
    setTimeout(function () {
      randomColor();
    }, 1000);
  }
}

function userTurn() {
  $(".btn")
    .off("click")
    .on("click", function () {
      let userChosenColor = $(this).attr("id");
      userPattern.push(userChosenColor);
      comparePattern();
    });
}

function start() {
  function initializeGame() {
    if (!startGame) {
      startGame = true;
      $("body").removeClass("gameOver");
      randomColor();
      $("h1").html("Game Started");
      $("p").html("Level " + gameLevel);
      userTurn();
    }
  }

  $(document)
    .off("keydown")
    .on("keydown", initializeGame);

  $(document)
    .off("touchstart")
    .on("touchstart", initializeGame);
}

start();
