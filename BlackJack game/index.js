let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame(){
  renderGame()
}


function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got BlackJack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of game! ";
    isAlive = false;
  }
  sumEl.textContent ="Sum: " + sum;
  cardEl.textContent ="Cards: " + firstCard + " " + secondCard;
  messageEl.textContent = message;
  console.log(message, sum);
}

function newCard() {
  let card = 5
  sum += card
  renderGame()
}
