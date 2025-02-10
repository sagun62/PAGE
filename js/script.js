document.addEventListener('DOMContentLoaded', function () {
	const dropdown = document.querySelector('.nav__links__item');
	const activeLink = document.querySelectorAll('.nav__links__item');
	const menuNav = document.querySelector('.nav__links__menuBizuteria');

	/////
	dropdown.addEventListener('mouseenter', function () {
		menuNav.classList.toggle('active');
	});
	menuNav.addEventListener('mouseleave', function () {
		menuNav.classList.toggle('active');
	});
	////
	activeLink.forEach((link) => {
		link.addEventListener('click', function () {
			activeLink.forEach((l) => l.classList.remove('active'));
			this.classList.add('active');
		});
	});
	////
	const nav = document.querySelector('.nav');
	const navUp = document.querySelector('.nav__up');
	const navCenter = document.querySelector('.nav__center');
	const scrollTrigger = 200; // Po ilu pikselach menu się zmienia

	window.addEventListener('scroll', function () {
		if (window.scrollY > scrollTrigger) {
			nav.classList.add('small');
			navUp.style.display = 'none';
			navCenter.style.display = 'none';
		} else {
			nav.classList.remove('small');
			navUp.style.display = 'flex';
			navCenter.style.display = 'flex';
		}

		if (window.matchMedia('(max-width: 992px)').matches) {
			navUp.style.display = 'none';
			navCenter.style.display = 'none';
		}
	});

	const burger = document.querySelector('.burger');
	const navPage = document.querySelector('.nav__mobile__navPage');
	const xClose = document.querySelector('.x-close');
	burger.addEventListener('click', function () {
		navPage.classList.add('active');
		navPage.classList.remove('hiding');
	});
	xClose.addEventListener('click', function () {
		navPage.classList.add('hiding'); // Dodaje animację zanikania
		setTimeout(() => {
			navPage.classList.remove('active'); // Usuwa menu po animacji
			navPage.classList.remove('hiding'); // Resetuje stan
		}, 1000); // Czas musi być taki jak w `transition`
	});

	const moreSubMenuBTN = document.querySelector('.moreSubMenuBTN');
	const subMenu = document.querySelector(
		'.nav__mobile__navPage__menu__item__submenu'
	);

	moreSubMenuBTN.addEventListener('click', function () {
		moreSubMenuBTN.classList.toggle('rotate');
	});

	moreSubMenuBTN.addEventListener('click', function () {
		subMenu.classList.toggle('active');
	});

	// SLIDER
	const sliderPhotos = document.querySelectorAll('.slider__box__item');
	let numberOfSlide = 0;

	function slideNumber() {
		numberOfSlide = (numberOfSlide + 1) % sliderPhotos.length;
		showSlide(numberOfSlide);
		setTimeout(slideNumber, 5000); 
	}
	function showSlide(number) {
		sliderPhotos.forEach((photo) => photo.classList.remove('active'));
		sliderPhotos[number].classList.add('active');
	}
	setTimeout(slideNumber, 5000);
});
