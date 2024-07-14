document.addEventListener("DOMContentLoaded", () => {
	// Update the current year
	const yearElement = document.getElementById("current-year");
	if (yearElement) {
		yearElement.innerText = new Date().getFullYear();
	}

	// Toggle menu functionality
	const toggle = document.querySelector(".toggle");
	const menu = document.querySelector(".nav-menu");

	if (toggle && menu) {
		toggle.addEventListener("click", () => {
			menu.classList.toggle("active");

			if (menu.classList.contains("active")) {
				menu.style.height = `${menu.scrollHeight}px`;
			} else {
				menu.style.height = "0";
			}

			toggle.innerHTML = menu.classList.contains("active")
				? `<i class="fas fa-times"></i>`
				: `<i class="fas fa-bars"></i>`;
		});
	}

	// Toggle details functionality
	document.querySelectorAll(".exp-window").forEach((expWindow) => {
		const companyTile = expWindow.querySelector(".company-tile");
		const targetId = companyTile?.getAttribute("data-target");

		if (companyTile && targetId) {
			companyTile.addEventListener("click", () => {
				const details = expWindow.querySelector(`#${targetId}-details`);
				const arrow = companyTile.querySelector(".arrow");

				if (details) {
					details.classList.toggle("open");
					arrow.classList.toggle("open");

					if (details.classList.contains("open")) {
						details.style.height = `${details.scrollHeight}px`;
					} else {
						details.style.height = "0";
					}
				}
			});
		}
	});

	// Calculate duration
	const calculateDuration = (startMonth, startYear, endMonth, endYear) => {
		const startDate = new Date(startYear, startMonth - 1);
		const endDate =
			endMonth && endYear ? new Date(endYear, endMonth - 1) : new Date();
		const totalMonths =
			(endDate.getFullYear() - startDate.getFullYear()) * 12 +
			(endDate.getMonth() - startDate.getMonth());

		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;
		return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
			years > 0 && months > 0 ? " and " : ""
		}${months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""}`;
	};

	// Update duration for each company tile
	document.querySelectorAll(".company-tile").forEach((tile) => {
		const startMonth = tile.getAttribute("data-start-month");
		const startYear = tile.getAttribute("data-start-year");
		const endMonth = tile.getAttribute("data-end-month");
		const endYear = tile.getAttribute("data-end-year");
		const durationElement = tile.querySelector(".duration");

		if (startMonth && startYear && durationElement) {
			durationElement.textContent = calculateDuration(
				startMonth,
				startYear,
				endMonth,
				endYear
			);
		}
	});

	// Calculate total work experience with unemployment gap
	const calculateTotalExperience = () => {
		const bioElement = document.querySelector(".short-bio");
		const startMonth = bioElement.getAttribute("data-start-month");
		const startYear = bioElement.getAttribute("data-start-year");
		const experienceDurationElement = document.getElementById(
			"experience-duration"
		);

		if (startMonth && startYear && experienceDurationElement) {
			const startDate = new Date(startYear, startMonth - 1);
			const currentDate = new Date();

			let totalMonths =
				(currentDate.getFullYear() - startDate.getFullYear()) * 12 +
				(currentDate.getMonth() - startDate.getMonth());

			// Subtract the period of unemployment (2 months)
			totalMonths -= 2;

			const years = Math.floor(totalMonths / 12);
			const months = totalMonths % 12;

			let experienceString = "";
			if (years > 0) {
				experienceString += `${years} year${years > 1 ? "s" : ""}`;
			}
			if (months > 0) {
				if (years > 0) {
					experienceString += " and ";
				}
				experienceString += `${months} month${months > 1 ? "s" : ""}`;
			}

			experienceDurationElement.textContent = experienceString;
		}
	};

	calculateTotalExperience();
});
