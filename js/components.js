/**
 * Reusable component functions for header and footer
 */

/**
 * Create header HTML
 * @param {Object} profile - Profile data
 * @param {Array} socials - Social media links
 * @returns {string} HTML string for header
 */
function createHeader(profile, socials) {
	return `
    <header class="header">
      <a href="/" class="header-logo">@${profile.name
				.toLowerCase()
				.replace(" ", ".")}</a>
      <nav class="nav">
        <button class="toggle" aria-label="Toggle navigation menu">
          <i class="fas fa-bars" aria-hidden="true"></i>
        </button>
        <ul class="nav-menu">
          <li class="nav-item"><a href="./about.html">About</a></li>
          <li class="nav-item"><a href="./projects.html">Projects</a></li>
          <li class="nav-item">
            <a href="https://instagram.com/picbypratik" target="_blank">Photos</a>
          </li>
          <li class="nav-item">
            <a href="${profile.resumeLink}" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
}

/**
 * Create footer HTML
 * @param {Object} profile - Profile data
 * @param {Array} socials - Social media links
 * @returns {string} HTML string for footer
 */
function createFooter(profile, socials) {
	const socialLinksHTML = socials
		.slice(0, 4)
		.map((social) => createSocialLink(social, true))
		.join("");

	return `
    <footer class="footer-container">
      <div class="footer">
        <div class="footer-column">
          <a href="/" class="footer-logo">@${profile.name
						.toLowerCase()
						.replace(" ", ".")}</a>
          <div class="socials">
            <ul>
              ${socialLinksHTML}
            </ul>
          </div>
          <span class="copyright" id="copyright">
            <i class="fa-regular fa-copyright"></i> ${profile.name}
            <span id="current-year"></span>
          </span>
        </div>
        <div class="footer-column">
          <a href="./about.html" class="footer-button">
            <img src="./img/smile.svg" alt="Smile Icon" />
            About
          </a>
          <a href="${profile.resumeLink}" target="_blank" class="footer-button">
            <img src="./img/resume.svg" alt="Resume Icon" />
            Resume
          </a>
        </div>
        <div class="footer-column">
          <a href="https://instagram.com/picbypratik" class="footer-button" target="_blank">
            <img src="./img/camera.svg" alt="Camera Icon" />
            Photos
          </a>
          <a href="mailto:${profile.email}" class="footer-button">
            <img src="./img/email.svg" alt="Email Icon" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Inject header into page
 * @param {Object} profile - Profile data
 * @param {Array} socials - Social media links
 */
function injectHeader(profile, socials) {
	if (!document.querySelector("header")) {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = createHeader(profile, socials);
		document.body.insertBefore(
			tempDiv.firstElementChild,
			document.body.firstChild,
		);
	}
}

/**
 * Inject footer into page
 * @param {Object} profile - Profile data
 * @param {Array} socials - Social media links
 */
function injectFooter(profile, socials) {
	const footer = createFooter(profile, socials);
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = footer;
	document.body.appendChild(tempDiv.firstElementChild);
}
