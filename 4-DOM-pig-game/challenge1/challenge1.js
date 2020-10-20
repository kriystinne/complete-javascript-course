/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. 
This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. 
The player loses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, 
    so take a look at the CSS code for the first one.)
*/


/*DOM = Document Object Model
- it is a structured representation of an HTML document that can be used to connect webpages to scripts
- for each HTML box, there is an object in the DOM that we can interact with js
*/

let scores, roundScores, activePlayer, gameActive, prevDice;

//state variable = the condition of a system (is our game playing or not)

//initialize the game
initGame();


// DOM manipulation
// document object

document.querySelector(".dice").style.display = "none";
document.querySelector(".dice2").style.display = "none";


// event handler
// btn-roll select it using query selector and then do smth with it
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gameActive) {

        // 1. Random number
        // create the dice to give a random number between 1 and 6
        let dice = Math.floor(Math.random()*6 + 1);
        let dice2 = Math.floor(Math.random()*6 + 1);

        // display the result
        let diceDOM = document.querySelector(".dice")
        diceDOM.style.display = "block";

        let dice2DOM = document.querySelector(".dice2");
        dice2DOM.style.display = "block";

        // update the image for the dice
        diceDOM.src = "dice-" + dice + ".png";
        dice2DOM.src = "dice-" + dice2 + ".png";
       

        // update the round Score IF the rolled number is not 1
        if (dice !== 1 && dice2 !== 1) {
            roundScore += dice;
            roundScore += dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }  else {
            setTimeout(function() {
                nextPlayer();
            }, 0500);           
        }
    }
    else {
        initGame();
    }
});


// update the score once the hold is pressed
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gameActive) {
        //set the player score to THE GLOBAL SCORE
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // set starting winner score
        winnerScore = 100;

        // check for winning score input
        let setScore = document.getElementById("winning-score").value;
        setScore != "" ? (winnerScore = setScore) : winnerScore;

        // check if the player won the game
        if (scores[activePlayer] >= winnerScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!"
            document.querySelector(".player-" + activePlayer +"-panel").classList.add("winner")
            document.querySelector(".player-" + activePlayer +"-panel").classList.remove("active")

            // remove the dice
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".dice2").style.display = "none";

            // remove the current score
            document.querySelector("#current-" + activePlayer).textContent = 0;
      
            // reset the game state
            gameActive = false;
        } else {
            setTimeout(function() {
                nextPlayer();
            }, 0500);           
        }
    }
});


function nextPlayer() {

     //jump to the next player
     activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
     roundScore = 0;
     // 
     document.querySelector("#current-0").textContent = 0;
     document.querySelector("#current-1").textContent = 0;

     // remove the active class from player 0 and adding it to player 1
     document.querySelector(".player-0-panel").classList.toggle("active")
     document.querySelector(".player-1-panel").classList.toggle("active")

     

     // hide the dice
     document.querySelector(".dice").style.display = "none";
     document.querySelector(".dice2").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click", initGame)

function initGame() {
    scores = [0,0];
    roundScore = 0;

    // start from player 1
    activePlayer = 0;

    // active game
    gameActive = true;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    // change back the player names
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    // remove the winner class
    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")
    document.querySelector(".player-0-panel").classList.remove("active")
    document.querySelector(".player-0-panel").classList.add("active")
    document.querySelector(".player-1-panel").classList.remove("active")

    // remove the value in the input field
    document.getElementById('winning-score').value = '';


}
