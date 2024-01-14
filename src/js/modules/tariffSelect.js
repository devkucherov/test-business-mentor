export function getTariff(cardSelector, titleSelector) {
	const cards = document.querySelectorAll(cardSelector);

	function handleClick() {
		const cardTitle = this.closest(cardSelector).querySelector(titleSelector);
		console.log(cardTitle.textContent.trim());
	}

	for (let card of cards) {
		const cardBtn = card.querySelector('.card__btn');
		cardBtn.addEventListener('click', handleClick);
	}
}