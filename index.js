// Save names of players as Variables
var playerOneName = prompt('Please enter the name of player 1.');
var playerTwoName = prompt('Please enter the name of player 2.');

document.querySelector('.player1').innerHTML = playerOneName;
document.querySelector('.player2').innerHTML = playerTwoName;

// Roll Dice function
rollDice();

function rollDice(){
  // Generate random number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Set random number to match dice image
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
//chose text of h1 based on which dice has a higher number
if (randomNumber1 > randomNumber2) {
document.querySelector('h1').innerHTML =  playerOneName + ' wins!';
} else if (randomNumber2 > randomNumber1) {
 document.querySelector('h1').innerHTML = playerTwoName + ' wins!';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
}
//Upon click of either dice image, reroll and determine new winner
document.querySelector('.img1').addEventListener("click", rollDice);
document.querySelector('.img2').addEventListener("click", rollDice);
