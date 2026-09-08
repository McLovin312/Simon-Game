var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var insults = [
  "Bro got zero rizz and even less memory. L + ratio.",
  "Skill issue. You really got diffed by four colored buttons?",
  "Bro got cooked by a pattern game... absolute negative aura.",
  "Bro failed on level " + level + ". Bro is not Him.",
  "Bait used to be believable. Your gameplay is straight up cooked.",
  "Bro got CTE playing a Simon game. Go touch grass.",
  "Bro dropped their aura into the shadow realm with that click.",
  "Is your brain running on 2G? Uncanny level performance.",
  "You are not in the green FN"
];

function animatePress(currentColor) {
  $("#" + currentColor)
    .animate({ opacity: 0.2 }, 100)
    .animate({ opacity: 1 }, 100);
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  animatePress(randomChosenColor);
  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    var vineBoomInterval = setInterval(function () {
      var vineAudio = new Audio("./sounds/vine-boom.mp3");
      vineAudio.play();
    }, 300);

    setTimeout(function () {
      clearInterval(vineBoomInterval);
      $(".insult-banner").remove();
    }, 3000);

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart.");

    var randomInsult = insults[Math.floor(Math.random() * insults.length)];
    $(".insult-banner").remove();
    $("body").append(
      '<div class="insult-banner" style="position:fixed;top:20px;left:0;right:0;text-align:center;background:red;color:white;padding:15px;font-size:24px;font-weight:bold;z-index:9999;">' +
        randomInsult +
        "</div>",
    );

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").on("click", function () {
  if (!started) return;

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  animatePress(userChosenColor);
  playSound(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keydown", function () {
  $(".insult-banner").remove();

  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});
