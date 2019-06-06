// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:



// There will be four crystals displayed as buttons on the page.
// Each crystal should have a random hidden value between 1 - 12.
// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. 
// To that end, do not refresh the page as a means to restart the game.


//"global variables"

//create variables to track
//wins
//losses
//goal for the round (random number)
//score 
//values of each crystal



//create a function to start/reset game

//create a click event
    //grab the value of the crystal that was clicked on
    //add tjat to the players score
    //test for win or loss
    //if score === goal
    //wins++


    //*call reset function*
    //create a new random number
    //update this on the page
    //create new values for each crystal
    //assign each value to a crystal

    //if score>goal
    //losses ++
    //updae losses on the page 
    //create a new random number
    //update this on the page
    //create new values for each crystal
    //assign each value to a crystal



var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var Cry1 = Math.floor(Math.random() * 11) + 1;
var Cry2 = Math.floor(Math.random() * 11) + 1;
var Cry3 = Math.floor(Math.random() * 11) + 1;
var Cry4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Cry1 = Math.floor(Math.random() * 11) + 1;
Cry2 = Math.floor(Math.random() * 11) + 1;
Cry3 = Math.floor(Math.random() * 11) + 1;
Cry4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#Cry1').on ('click', function(){
    counter = counter + Cry1;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry2').on ('click', function(){
    counter = counter + Cry2;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry3').on ('click', function(){
    counter = counter + Cry3;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Cry4').on ('click', function(){
    counter = counter + Cry4;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

