import Glide from '@glidejs/glide';

window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	loader.classList.add('dissapear');
	document.body.classList.remove('loading')
	loader.addEventListener('transitionend', () => {
		document.body.removeChild(loader)
	})
	setTimeout(() => {
		window.scrollTo(0, -1)
	}, 0)

	const menuButton = document.querySelector('.menu-button');
	const menu = document.querySelector('.menu');

	menuButton.addEventListener('click', () => {
		document.body.classList.toggle('menu-open')
		menuButton.classList.toggle('menu-open')
		menu.classList.toggle('menu-open')
	})

	const elements = document.querySelectorAll('.animate');
	const options = {
		root: null,
		rootMargin: '150px 0px -325px 0px',
		threshold: 0
	};

	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('shown')
				observer.unobserve(entry.target)
			}
		});
	}, options);

	elements.forEach((item) => {
		observer.observe(item);
	})

	const glider = new Glide('.glide', {
		type: 'carousel',
		startAt: 0,
		perView: 2,
		breakpoints: {
			860: {
				perView: 1
			}
		}
	}).mount()
})	