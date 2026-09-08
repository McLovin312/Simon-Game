var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//AUDIO
function addAudio(id){
    switch(id){
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

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#"+ randomChosenColor).animate({ opacity: 0.2 }, 100).animate({ opacity: 1 }, 100);

    addAudio(randomChosenColor);
}

$(".btn").on("click", function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});
