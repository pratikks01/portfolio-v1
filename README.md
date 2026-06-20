# Pratik Shastrakar - Developer Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/a97a8c74-04cc-4b59-b7b9-71d2800ca95f/deploy-status)](https://app.netlify.com/sites/pratikportfolio-v1/deploys)
[![HTML5](https://img.shields.io/badge/-HTML5-E44D26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/-CSS3-2965f1?style=flat&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F0DB4F?style=flat&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

This is the source code for my personal developer portfolio website. It showcases my skills, experience, projects, and serves as an interactive online resume.

**Live Website:** [pratikshastrakar.in](https://pratikshastrakar.netlify.app/)

## 🚀 Features

- **Dynamic Content:** All profile data, projects, experience, and resume details are driven by JSON files, making updates extremely easy without touching HTML/JS.
- **Fully Responsive:** Adapts seamlessly to all screen sizes (mobile, tablet, desktop).
- **Custom Design:** Built with modern CSS (CSS Variables, Flexbox, Grid) without relying on heavy frameworks.
- **Performance Optimized:** Lightweight assets, semantic HTML, and dynamic JavaScript rendering.

## 🛠️ Built With

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** [Fira Code](https://fonts.google.com/specimen/Fira+Code) (headings/code) & [Nunito](https://fonts.google.com/specimen/Nunito) (normal text)
- **Icons:** [FontAwesome](https://fontawesome.com/) & custom SVG assets
- **Hosting/Deployment:** [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

```text
portfolio-v1/
├── index.html        # Home Page
├── about.html        # About & Experience Page
├── projects.html     # All Projects Page
├── resume.html       # Resume/CV Page
├── _redirects        # Netlify routing rules
├── data/             # 🗃️ SOURCE OF TRUTH FOR CONTENT
│   ├── data.json     # Site-wide data (Profile, Socials, Skills, Projects, Experience)
│   └── resume.json   # Resume-specific data
└── assets/           # Static assets
    ├── css/          # Stylesheets (modularized)
    ├── js/           # JavaScript logic and dynamic rendering
    ├── images/       # Project thumbnails, profile pic, icons
    └── favicons/     # Site favicons
```

---

## 📝 How to Update the Portfolio

This portfolio is designed to be easily updatable. **You do not need to edit HTML files to update your information.**

All content is managed via the JSON files located in the `data/` directory.

### 1. Updating General Info, Projects, & Experience (`data/data.json`)

Open `data/data.json` to modify the following:

- **Profile Info (`profile`):** Update your title, bio, location, gap months (for experience calculation).
- **Social Links (`socials`):** Add or remove social media links.
- **Projects (`projects`):**
  - To add a new project, append a new object to the `projects` array.
  - Set `"showOnHome": true` to feature the project on the landing page.
  - Make sure the `"image"` path points to a valid image in `assets/images/projects/`.
- **Experience (`experience`):** Update your job roles, dates, and bullet points.
- **Education (`education`):** Update your academic history.
- **Skills (`skills`):** Add new tech stack icons. Make sure to download the SVG/PNG and place it in `assets/images/icons/`.

### 2. Updating the Resume Page (`data/resume.json`)

Open `data/resume.json` to modify the dedicated Resume page (`resume.html`):

- **Personal Details:** Update your contact info and the link to your downloadable PDF (`pdfLink`).
- **Summary:** Update your professional summary paragraph.
- **Experience / Projects / Education / Skills:** These arrays directly populate the resume layout. They are kept separate from `data.json` to allow for resume-specific formatting and tailoring.

> **Pro Tip:** If you make changes to `data.json` or `resume.json` and the page doesn't load or breaks, ensure your JSON syntax is valid. Missing commas or unescaped quotes will break the JavaScript renderer. You can use a tool like [JSONLint](https://jsonlint.com/) to validate your changes.

---

## 💻 Local Development Setup

To run this project locally and preview your updates:

1. Clone the repository to your local machine.
2. Since the site fetches data from local JSON files, you **must run a local server** to avoid CORS errors in your browser. You cannot just double-click `index.html`.

**Using VS Code (Recommended):**

- Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Right-click `index.html` and select **"Open with Live Server"**.

**Using Python:**

- Open your terminal in the project directory.
- Run: `python3 -m http.server 8000`
- Visit `http://localhost:8000` in your browser.

**Using Node.js (npx):**

- Open your terminal and run: `npx serve .`

---

## 🎨 Color Scheme

- **Oxford Blue** (`#1d263b`) - Page background color
- **White** (`#ffffff`) - Primary text
- **Charm Pink** (`#f08cae`) - Primary accent, links, hover effects
- **Shamrock Green** (`#399e5a`) - Secondary accent, link hovers
- **Viridian Green** (`#0fa3b1`) - Project skill text color
- **Yellow / Gold** (`#fdca40`) - Headings

---

## 📬 Creator / Maintainer

**Pratik Shastrakar** ([@pratikks01](https://github.com/pratikks01))

If you have any questions, comments, or concerns, feel free to contact me:

[![Email](https://img.shields.io/badge/Gmail-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:pshastrakar4@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratikshastrakar/)
[![Twitter](<https://img.shields.io/badge/X_(Twitter)-000000?style=flat&logo=x&logoColor=white>)](https://x.com/pratikks01)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/pratikks01/)
