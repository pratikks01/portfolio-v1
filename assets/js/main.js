/**
 * Utility function to calculate duration between two dates
 */
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

/**
 * Generic function to toggle collapsible elements.
 * @param {HTMLElement} element - The element to toggle.
 * @param {string} activeClass - The class to apply when open.
 */
const toggleCollapsible = (element, activeClass = "open") => {
	element.classList.toggle(activeClass);
	if (element.classList.contains(activeClass)) {
		// Set height based on its content's scroll height
		element.style.height = `${element.scrollHeight}px`;
	} else {
		element.style.height = "0";
	}
};
/**
 * Setup toggle details functionality for experience/education cards
 */
const setupDetailsToggle = () => {
	document.querySelectorAll(".exp-window").forEach((expWindow) => {
		const companyTile = expWindow.querySelector(".company-tile");
		const targetId = companyTile?.getAttribute("data-target");

		if (companyTile && targetId) {
			companyTile.addEventListener("click", () => {
				const details = expWindow.querySelector(`#${targetId}-details`);
				const arrow = companyTile.querySelector(".arrow");

				if (details) {
					toggleCollapsible(details); // Use the helper
					if (arrow) {
						arrow.classList.toggle("open");
					}
				}
			});
		}
	});
};

/**
 * Update duration display for all company tiles
 */
const updateDurations = () => {
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
				endYear,
			);
		}
	});
};

/**
 * Calculate total work experience
 * @param {number} gapMonths - Months to subtract for employment gaps (from data.json)
 */
const calculateTotalExperience = (gapMonths = 0) => {
	const bioElement = document.querySelector(".short-bio");
	if (!bioElement) {
		return;
	}

	const startMonth = bioElement.getAttribute("data-start-month");
	const startYear = bioElement.getAttribute("data-start-year");
	const experienceDurationElement = document.getElementById(
		"experience-duration",
	);

	if (startMonth && startYear && experienceDurationElement) {
		const startDate = new Date(startYear, startMonth - 1);
		const currentDate = new Date();

		let totalMonths =
			(currentDate.getFullYear() - startDate.getFullYear()) * 12 +
			(currentDate.getMonth() - startDate.getMonth());

		// Subtract employment gaps
		totalMonths -= gapMonths;

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

/**
 * Setup mobile menu toggle
 */
const setupMenuToggle = () => {
	const toggle = document.querySelector(".toggle");
	const menu = document.querySelector(".nav-menu");

	if (toggle && menu) {
		toggle.addEventListener("click", () => {
			toggleCollapsible(menu, "active"); // Use the helper

			const isExpanded = menu.classList.contains("active");
			toggle.setAttribute("aria-expanded", isExpanded);
			toggle.innerHTML = isExpanded
				? `<i class="fas fa-times" aria-hidden="true"></i>`
				: `<i class="fas fa-bars" aria-hidden="true"></i>`;
		});
	}
};

/**
 * Shared page initialization function.
 * Fetches data.json, injects header/footer, and runs page-specific setup.
 * @param {Function} pageSetup - Callback receiving data for page-specific rendering
 */
async function initPage(pageSetup) {
	try {
		const res = await fetch("./data/data.json");
		const data = await res.json();

		// Inject header and footer
		injectHeader(data.profile, data.socials);
		injectFooter(data.profile, data.socials);

		// Setup menu toggle AFTER header is injected
		setupMenuToggle();

		// Update the current year
		const yearElement = document.getElementById("current-year");
		if (yearElement) {
			yearElement.innerText = new Date().getFullYear();
		}

		// Run page-specific setup
		if (pageSetup) {
			pageSetup(data);
		}
	} catch (err) {
		console.error("Error loading data:", err);
	}
}
