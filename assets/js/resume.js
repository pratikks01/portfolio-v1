function escapeHTML(str) {
	if (!str) return "";
	return str.replace(
		/[&<>'"]/g,
		(tag) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				'"': "&quot;",
			}[tag] || tag)
	);
}

// Keep <strong> tags intact for bolding by simply removing them from the escape function 
// since we trust our own data in this context. A safer way is to just inject as innerHTML for our own JSON.
async function renderResume() {
	try {
		const response = await fetch("./data/resume.json");
		const data = await response.json();
		const container = document.getElementById("resume-content");

		if (!container) return;

		let html = `
			<div class="resume-header">
				<h1>${escapeHTML(data.personal.name)}</h1>
				<div class="resume-contact">
					${escapeHTML(data.personal.phone)} | 
					<a href="mailto:${escapeHTML(data.personal.email)}">${escapeHTML(data.personal.email)}</a> | 
					<a href="${escapeHTML(data.personal.linkedInUrl)}" target="_blank">${escapeHTML(data.personal.linkedIn)}</a> |
					<a href="${escapeHTML(data.personal.websiteUrl)}" target="_blank">${escapeHTML(data.personal.website)}</a>
				</div>
			</div>

			<div class="resume-section">
				<h2>Professional Summary</h2>
				<p style="font-size: 0.95em; line-height: 1.5; text-align: justify;">
					${data.summary}
				</p>
			</div>
		`;

		// Experience Section
		if (data.experience && data.experience.length > 0) {
			html += `<div class="resume-section"><h2>Experience</h2>`;
			data.experience.forEach((job) => {
				html += `
					<div class="resume-item">
						<div class="resume-item-header">
							<span class="resume-item-title">${escapeHTML(job.company)}</span>
							<span class="resume-item-location">${escapeHTML(job.location)}</span>
						</div>
						<div class="resume-item-subheader">
							<span>${escapeHTML(job.title)}</span>
							<span>${escapeHTML(job.date)}</span>
						</div>
						<ul class="resume-list">
							${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
						</ul>
					</div>
				`;
			});
			html += `</div>`;
		}

		// Projects Section
		if (data.projects && data.projects.length > 0) {
			html += `<div class="resume-section"><h2>Projects</h2>`;
			data.projects.forEach((proj) => {
				html += `
					<div class="resume-item">
						<div class="resume-item-header" style="justify-content: flex-start;">
							<span class="resume-item-title">${escapeHTML(proj.name)}</span>
							<span style="margin: 0 10px;">|</span>
							<span style="font-style: italic;">${escapeHTML(proj.technologies)}</span>
						</div>
						<ul class="resume-list">
							${proj.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
						</ul>
					</div>
				`;
			});
			html += `</div>`;
		}

		// Education Section
		if (data.education && data.education.length > 0) {
			html += `<div class="resume-section"><h2>Education</h2>`;
			data.education.forEach((edu) => {
				html += `
					<div class="resume-item">
						<div class="resume-item-header">
							<span class="resume-item-title">${escapeHTML(edu.institution)}</span>
							<span class="resume-item-location">${escapeHTML(edu.location)}</span>
						</div>
						<div class="resume-item-subheader">
							<span>${escapeHTML(edu.degree)}</span>
							<span>${escapeHTML(edu.date)}</span>
						</div>
					</div>
				`;
			});
			html += `</div>`;
		}

		// Skills Section
		if (data.skills && data.skills.length > 0) {
			html += `<div class="resume-section resume-skills"><h2>Technical Skills</h2>`;
			data.skills.forEach((skill) => {
				html += `<p><strong>${escapeHTML(skill.category)}:</strong> ${escapeHTML(skill.items)}</p>`;
			});
			html += `</div>`;
		}

		container.innerHTML = html;

	} catch (error) {
		console.error("Error loading resume data:", error);
		document.getElementById("resume-content").innerHTML = 
			"<p>Error loading resume details. Please download the PDF via the button above.</p>";
	}
}

document.addEventListener("DOMContentLoaded", renderResume);
