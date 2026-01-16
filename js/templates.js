/**
 * Template rendering functions for dynamic content generation
 */

/**
 * Create a project card HTML element
 * @param {Object} project - Project data object
 * @returns {string} HTML string for project card
 */
function createProjectCard(project) {
	const links = project.links;
	let linksHTML = "";

	if (links.demo) {
		linksHTML += `<a href="${links.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>`;
	}
	if (links.github) {
		linksHTML += `<a href="${links.github}" target="_blank"><i class="fa-brands fa-github"></i></a>`;
	}

	const skillsHTML = project.skills
		.map((skill) => `<span>${skill}</span>`)
		.join("");

	return `
    <div class="card">
      <img
        src="${project.image}"
        alt="${project.title}"
        class="card-preview-img"
      />
      <div class="card-info">
        <div class="title-and-links">
          <span class="project-title">${project.title}</span>
          <div class="project-links">
            ${linksHTML}
          </div>
        </div>
        <div class="project-skills">
          ${skillsHTML}
        </div>
        <p class="project-description" id="just-text">
          ${project.description}
        </p>
      </div>
    </div>
  `;
}

/**
 * Create experience/work entry HTML
 * @param {Object} exp - Experience data object
 * @returns {string} HTML string for experience card
 */
function createExperienceCard(exp) {
	const endDate =
		exp.endMonth && exp.endYear ? `${exp.endMonth} ${exp.endYear}` : "Present";
	const companyLink = exp.companyUrl
		? `<a id="h3-color" href="${exp.companyUrl}" target="_blank">${exp.company} (${exp.locationType})</a>`
		: `<span id="h3-color">${exp.company} (${exp.locationType})</span>`;

	const detailsHTML = exp.details
		.map((detail) => `<p id="experience-spacing">${detail}</p>`)
		.join("");

	return `
    <div class="exp-window">
      <div
        class="company-tile"
        data-start-month="${exp.startMonth}"
        data-start-year="${exp.startYear}"
        ${exp.endMonth ? `data-end-month="${exp.endMonth}"` : ""}
        ${exp.endYear ? `data-end-year="${exp.endYear}"` : ""}
        data-target="${exp.id}"
      >
        <p>${companyLink}</p>
        <h4 class="green">${exp.position}</h4>
        <p class="date">
          Duration: ${exp.startMonth}/${
		exp.startYear
	} - ${endDate} (<span class="duration"></span>)
        </p>
        ${exp.location}<br />
        <div
          class="details closed card-description"
          id="${exp.id}-details"
        >
          <h5 id="edu-spacing">Detailed Experience</h5>
          ${detailsHTML}
        </div>
        <span class="arrow"><i class="fas fa-chevron-down"></i></span>
      </div>
    </div>
  `;
}

/**
 * Create education entry HTML
 * @param {Object} edu - Education data object
 * @returns {string} HTML string for education card
 */
function createEducationCard(edu) {
	let detailsHTML = "";

	if (edu.details.achievements && edu.details.achievements.length > 0) {
		const achievementsHTML = edu.details.achievements
			.map((achievement) => `<p id="just-text">${achievement}</p>`)
			.join("");
		detailsHTML += `
      <h5 id="edu-spacing">Achievements</h5>
      ${achievementsHTML}
    `;
	}

	if (edu.details.coursework && edu.details.coursework.length > 0) {
		const courseHTML = edu.details.coursework
			.map((course) => `<p>${course}</p>`)
			.join("");
		detailsHTML += `
      <h5 id="edu-spacing">Relevant Coursework</h5>
      ${courseHTML}
    `;
	}

	const detailsSection =
		detailsHTML.trim() !== ""
			? `
      <div class="details closed card-description" id="${edu.id}-details">
        ${detailsHTML}
      </div>
      <span class="arrow"><i class="fas fa-chevron-down"></i></span>
    `
			: "";

	return `
    <div class="exp-window">
      <div class="company-tile" data-target="${edu.id}">
        <p><span id="h3-color">${edu.institution}</span></p>
        <h4 class="green">${edu.degree}</h4>
        <p class="date">${edu.startDate} - ${edu.endDate}</p>
        CGPA: ${edu.cgpa}<br />
        ${detailsSection}
      </div>
    </div>
  `;
}

/**
 * Create skill badge HTML
 * @param {Object} skill - Skill data object
 * @returns {string} HTML string for skill badge
 */
function createSkillBadge(skill) {
	return `
    <div class="skill">
      <img src="${skill.icon}" alt="${skill.name} Icon" />
      <span>${skill.name}</span>
    </div>
  `;
}

/**
 * Create social media link HTML
 * @param {Object} social - Social data object
 * @param {boolean} isFooter - Whether this is for footer (different styling)
 * @returns {string} HTML string for social link
 */
function createSocialLink(social, isFooter = false) {
	if (isFooter) {
		return `
      <li class="social-link">
        <a href="${social.url}" aria-label="${social.name}" target="_blank">
          <i class="fa-brands ${social.icon}"></i>
        </a>
      </li>
    `;
	}

	return `
    <li class="social-link">
      <a href="${social.url}" aria-label="${social.name}" target="_blank">
        <i class="fa-brands ${social.icon}"></i>
      </a>
    </li>
  `;
}

/**
 * Create social media list item HTML (for about page)
 * @param {Object} social - Social data object
 * @returns {string} HTML string for social media list item
 */
function createSocialMediaListItem(social) {
	return `
    <a href="${social.url}" class="social-media-item" ${
		social.url.startsWith("http") ? 'target="_blank"' : ""
	}>
      <i class="fa-brands ${social.icon}"></i>
      ${social.label}
    </a>
  `;
}
