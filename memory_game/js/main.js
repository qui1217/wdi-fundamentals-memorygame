var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', "images/back.png");

    cardElement.setAttribute('img', "images/queen-of-hearts.png");
    cardElement.setAttribute('img', "images/queen-of-diamonds.png");
    cardElement.setAttribute('img', "images/king-of-hearts.png");
    cardElement.setAttribute('img', "images/king-of-diamonds.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click' , flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

var cardOne = cards[0];

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

}
createBoard();
