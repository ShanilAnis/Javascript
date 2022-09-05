let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
  return 5
}


function startGame() {
  renderGame();
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
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  messageEl.textContent = message;
  console.log(message, sum);
}

function newCard() {
  let thirdCard = getRandomCard();
  cards.push(thirdCard);
  sum += thirdCard;
  renderGame();
}
