$(document).ready(function() {
  // We need a variable for the random number and function that sets its value to a random number from 19 to 120

  var randomNum = randomNumSet();

  function randomNumSet() {
    return Math.floor(Math.random() * 102) + 19;
  }

  // we need a player score variable

  var currentScore = 0;

  // we need var to keep track of wins and losses
  var wins = 0;
  var losses = 0;

  // create and array that holds the crystal values and a function that determines their values

  var redCrystal;
  var blueCrystal;
  var greenCrystal;
  var yellowCrystal;
  function randomCrystalSet() {

    redCrystal = Math.floor(Math.random() * 12) + 1;
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    
    
  }
  // now we need a function that sets the game
  function gameSet() {
      currentScore = 0;
      randomNum = randomNumSet();
      randomCrystalSet();
      $("#random-number").text(randomNum);
  }

function winlossUpdate(isAWin){
   
    if (isAWin === true){
        $("#wins-losses").append($("<p>").text("You Win!"));
      gameSet();
      placeCurrentScore();
    }
    else if (isAWin === false){
        $("#wins-losses").append($("<p>").text("You Lose!"));
      gameSet();
      placeCurrentScore();
    }
    var winSpan = $("<span>").text(wins);
    var lossSpan = $("<span>").text(losses);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(winSpan);
    pLosses.append(lossSpan);

    $("#wins-losses").append(pWins);
    $("#wins-lossescd").append(pLosses);

}
function placeCurrentScore(){
    var scoreNumDiv = $("<div id='score-number'>").text(currentScore);
$("#score-area").html();
$("#score-area").html(scoreNumDiv);
}

function updateCurrentScore(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    currentScore += crystal;
  }
  gameSet();
  winlossUpdate();
  placeCurrentScore();

// //   Button functions
// ---
// ---
// ---



  $(".red-button").on("click", function(event) {
    
    updateCurrentScore(redCrystal);
    placeCurrentScore();

    if (currentScore === randomNum) {
        // Increment wins, restart the game, and update the page.
        wins++;
        gameSet();
        winlossUpdate(true);
      }
      // If our guess number exceeded our target number...
      else if (currentScore > randomNum) {
        // Increment losses, restart the game, and update the page.
        losses++;
        gameSet();
        winlossUpdate(false);
      }
    });
    $(".blue-button").on("click", function(event) {
    
        updateCurrentScore(blueCrystal);
        placeCurrentScore();
        if (currentScore === randomNum) {
            // Increment wins, restart the game, and update the page.
            wins++;
            gameSet();
            winlossUpdate(true);
          }
          // If our guess number exceeded our target number...
          else if (currentScore > randomNum) {
            // Increment losses, restart the game, and update the page.
            losses++;
            gameSet();
            winlossUpdate(false);
          }
        });
        $(".green-button").on("click", function(event) {
    
            updateCurrentScore(greenCrystal);
            placeCurrentScore();
            if (currentScore === randomNum) {
                // Increment wins, restart the game, and update the page.
                wins++;
                gameSet();
                winlossUpdate(true);
              }
              // If our guess number exceeded our target number...
              else if (currentScore > randomNum) {
                // Increment losses, restart the game, and update the page.
                losses++;
                gameSet();
                winlossUpdate(false);
              }
            });
            $(".yellow-button").on("click", function(event) {
    
                updateCurrentScore(yellowCrystal);
                placeCurrentScore();
                if (currentScore === randomNum) {
                    // Increment wins, restart the game, and update the page.
                    wins++;
                    gameSet();
                    winlossUpdate(true);
                  }
                  // If our guess number exceeded our target number...
                  else if (currentScore > randomNum) {
                    // Increment losses, restart the game, and update the page.
                    losses++;
                    gameSet();
                    winlossUpdate(false);
                  }
                });
  // //   Button functions
// ---
// ---
// ---



});
        
