window.addEventListener('DOMContentLoaded', () => {
	// tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items'),
		menuTabs = document.querySelectorAll('.menu__item');

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	}
	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	// Timer

	const deadline = '2023-12-05';
	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());
		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			(days = Math.floor(t / (1000 * 60 * 60 * 24))),
				(hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
				(minutes = Math.floor((t / 1000 / 60) % 60)),
				(seconds = Math.floor((t / 1000) % 60));
		}
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);

	// modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		// modal.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		// modal.classList.toggle('show');
		document.body.style.overflow = '';
	}
	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});
	// const modalTimerId = setTimeout(openModal, 5000);

	function showModalByScroll() {
		if (
			window.scrollY + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
	//# 79 Used to clases for the menu
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 4;
			this.changeToPLN();
		}
		changeToPLN() {
			this.price = this.price * this.transfer;
		}
		render() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}
			element.innerHTML = `			
			<img src=${this.src} alt=${this.alt} />
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.descr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Price:</div>
				<div class="menu__item-total"><span>${this.price}</span> PLN/day</div>
			</div>
			`;
			this.parent.append(element);
		}
	}
	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Menu "Fitness"',
		'The "Fitness" menu is a new approach to food preparation: more	fresh fruits and vegetables. The product of active and healthy people. This is absolutely new product with optimal price and high quality!',
		12,
		'.menu .container',
		'menu__item',
		'big'
	).render();
	new MenuCard(
		'img/tabs/elite.jpg',
		'elite',
		'Menu "Premium"',
		'In the "Premium" menu we use not only beautiful packaging design,but also the quality of the dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!',
		30,
		'.menu .container',
		'menu__item'
	).render();
	new MenuCard(
		'img/tabs/post.jpg',
		'vegy',
		'Menu "Lenten"',
		'The "Lenten" menu is a careful selection of ingredients: total	no animal products, milk made from almonds,	oats, coconut or buckwheat, the right amount of protein with tofu and imported vegetarian steaks.',
		20,
		'.menu .container',
		'menu__item'
	).render();
	// Forms

	const forms = document.querySelectorAll('form');
const message = {
	loading: 'Loading',
	success: 'Success',
	failure: 'Failure',
};

forms.forEach((item) => {
	postData(item);
});
function postData(form) {
	form.addEventListener('submit', (e) => {
		const stasusMessage = document.createElement('div');
		stasusMessage.classList.add('status');
		stasusMessage.textContent = message.loading;
		e.preventDefault();
		const request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'multipart/form-data');
		const formData = new FormData(form);
		request.send(formData);
		request.addEventListener('load', () => {
			if (request.status === 200) {
				console.log(request.response);
				stasusMessage.textContent = message.success;
			} else {
				stasusMessage.textContent = message.failure;
			}
		});
	});
}
});
