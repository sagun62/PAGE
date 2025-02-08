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
});
