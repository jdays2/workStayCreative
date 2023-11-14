const iconsWrapper = document.querySelector('.rates__icons-wrapper');

if (iconsWrapper) {
	const icons = iconsWrapper.querySelectorAll('.rates__icon');
	icons.forEach((icon, id) => {
		const eventHandler = () => {
			icons.forEach((currentIcon, i) => {
				if (i <= id) {
					currentIcon.classList.add('active');
				} else {
					currentIcon.classList.remove('active');
				}
			});
		};
		icon.addEventListener('click', eventHandler);

		const mouseOverHandler = () => {
			icons.forEach((currentIcon, i) => {
				currentIcon.classList.add('hover-zero');
				if (i <= id) {
					currentIcon.classList.add('hover-active');
				} else {
					currentIcon.classList.remove('hover-active');
				}
			});
		};
		const mouseOutHandler = () => {
			icons.forEach((currentIcon) => {
				currentIcon.classList.remove('hover-zero');
				currentIcon.classList.remove('hover-active');
			});
		};

		icon.addEventListener('mouseover', mouseOverHandler);
		iconsWrapper.addEventListener('mouseout', mouseOutHandler);
	});
}
