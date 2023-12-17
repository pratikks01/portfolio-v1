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

// Add code to dynamically update the copyright year
document.addEventListener("DOMContentLoaded", function () {
	const currentYear = new Date().getFullYear();
	const yearElement = document.getElementById("current-year");

	if (yearElement) {
		yearElement.innerText = currentYear;
	}
});
