//select all space, called "cards"
var cards = document.querySelectorAll('.card');
var reset = document.querySelector('.reset');
var count = 0;
//user clicks a card, turns over X or O depending on turn
function turnCard() {
	count++;
	if (count % 2 === 0) {
		this.innerText = 'X';
	} else {
		this.innerText = 'O';
	}

}
//creates 3 rows of 3
for (i = 0; i < cards.length; i++) {
	if (i % 3 === 0) {
		cards[i].setAttribute('class', 'new-line');
	}
}
//binds turnCard to cards
for (i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', turnCard);
}
//resets game
reset.addEventListener('click', function() {
	window.location.reload();
});