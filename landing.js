/**
 * Pathshala - Live preview landing page
 */

// TODO: replace '#' with the ThemeForest item URL. All "Buy" buttons (.js-buy) use it.
const BUY_URL = '#';

(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {
		// Buy buttons
		document.querySelectorAll('.js-buy').forEach(function (link) {
			link.href = BUY_URL;
			if (BUY_URL !== '#') {
				link.target = '_top'; // leave the ThemeForest preview frame
			}
		});

		// Navbar shadow once the page scrolls
		const nav = document.getElementById('lpNav');
		const onScroll = function () {
			nav.classList.toggle('is-scrolled', window.scrollY > 10);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		// Close the mobile menu after choosing a section
		const menu = document.getElementById('lpMenu');
		menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
			link.addEventListener('click', function () {
				if (menu.classList.contains('show')) {
					bootstrap.Collapse.getOrCreateInstance(menu).hide();
				}
			});
		});

		// Current year
		document.querySelectorAll('[data-year]').forEach(function (el) {
			el.textContent = new Date().getFullYear();
		});
	});
})();
