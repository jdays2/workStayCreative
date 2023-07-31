const liked = document.querySelectorAll('.basic-card__like');
const favored = document.querySelectorAll('.basic-card__favor');

const activeStatus = 'active-status';

const toggleClass = (element) => {
	element.classList.toggle(activeStatus);
};
if (liked) {
	liked.forEach((element) => {
		element.addEventListener('click', () => toggleClass(element));
	});
}

if (favored) {
	favored.forEach((element) => {
		element.addEventListener('click', () => toggleClass(element));
	});
}
