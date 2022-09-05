let firstCard ;
let secondCard ;
let cards ;
let sum ;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
  let card =  Math.ceil(Math.random()*13)
  console.log(card)
  if (card === 1){
    return card = 11
  }
  else if (card === 11 || card === 12 || card === 13){
    return card = 10
  }
  
  else {
    return card
  }
}


function startGame() {
  isAlive = true
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
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
  if (sum < 21){
  let thirdCard = getRandomCard();
  cards.push(thirdCard);
  sum += thirdCard;
  renderGame()}
}

function reset(){
  message = "Want to play a game? "
  messageEl.textContent = message;
  cards = []
  cardEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: "
  sum = 'Sums:'

}
