var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function animatePress(currentColor) {
  $("#" + currentColor)
    .animate({ opacity: 0.2 }, 100)
    .animate({ opacity: 1 }, 100);
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//AUDIO
function playSound(id) {
  switch (id) {
    case "green":
      var audio = new Audio("./sounds/green.mp3");
      audio.play();
      break;

    case "red":
      var audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;

    case "yellow":
      var audio = new Audio("./sounds/yellow.mp3");
      audio.play();
      break;

    case "blue":
      var audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;

    default:
      var audio = new Audio("./sounds/wrong.mp3");
      audio.play();
      break;
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  animatePress(randomChosenColor);
  playSound(randomChosenColor);

  level++;
  $("h1").text("level " + level);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      userClickedPattern = [];
      setTimeout(nextSequence, 1000);
    }
  } else {
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").on("click", function () {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  //Animate box and add sound for user input as well.
  animatePress(this.id);
  playSound(this.id);

  checkAnswer(userClickedPattern.length - 1);
});

var started = false;
var level = 0;

$(document).on("keydown", function (e) {
  if (started === false) {
    $("h1").text("level 0");
    nextSequence();
    started = true;
  }
});
