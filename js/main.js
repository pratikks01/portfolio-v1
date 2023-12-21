document.addEventListener("DOMContentLoaded", function () {
	const currentYear = new Date().getFullYear();
	const yearElement = document.getElementById("current-year");

	if (yearElement) {
		yearElement.innerText = currentYear;
	}

	// Toggle functionality for menu
	const toggle = document.querySelector(".toggle");
	const menu = document.querySelector(".nav-menu");

	function toggleMenu() {
		menu.classList.toggle("active");

		if (menu.classList.contains("active")) {
			// add x (close menu) icon
			toggle.innerHTML = `<i class="fas fa-times"></i>`;
		} else {
			// add menu icon
			toggle.innerHTML = `<i class="fas fa-bars"></i>`;
		}
	}

	toggle.addEventListener("click", toggleMenu, false);

	// Toggle functionality for details
	const expWindows = document.querySelectorAll(".exp-window");

	expWindows.forEach((expWindow) => {
		const companyTile = expWindow.querySelector(".company-tile");
		const targetId = companyTile.getAttribute("data-target");

		if (companyTile && targetId) {
			companyTile.addEventListener("click", function () {
				const details = expWindow.querySelector(`#${targetId}-details`);

				if (details) {
					details.classList.toggle("open");
				}
			});
		}
	});
});
