# Rune Featherston - WAPH Project 1 Report

**Course:** Web Application Programming and Hacking (WAPH)  
**Instructor:** Dr. Phu Phung  
**Student:** Rune Featherston  
**Email:** rune.featherston@example.com  

![Headshot](image.png)

---

## Overview

This project involved building a professional portfolio website hosted on GitHub Pages that showcases my background, skills, and project experience, particularly from the Web Application Programming and Hacking course. The assignment required combining front-end development, JavaScript interactivity, public API usage, cookie-based session recognition, and professional design practices. Through completing this, I deepened my fluency in web technologies and strengthened my full-stack engineering toolkit.

**Live Website:** [https://runefeatherston.github.io](https://runefeatherston.github.io)  
**GitHub Repository:** [https://github.com/RuneFeatherston/RuneFeatherston.github.io](https://github.com/RuneFeatherston/RuneFeatherston.github.io)

---

## Task Completion Summary

### 1. Personal Website Creation

- Built a responsive, mobile-friendly personal portfolio in `index.html`
- Included name, 150x150 headshot (just a general photo of me, hope you don't mind!), email, phone number, GitHub link, and education/work background
- Embedded a downloadable resume
- Added a visually styled featured project section
- Created a separate page (`waph.html`) introducing the WAPH course and my related work

---

### 2. WAPH Course Link Page

- Created `waph.html`, a standalone page highlighting course objectives, tools, labs, and hands-on projects
- Added a "Fun Corner" section demonstrating interactive features from Lab 2
- Included internal link navigation and return-to-home functionality
- I want to note, I put all of the clocks and API related stuff in the waph.html instead of index.html so that the main page looks cleaner. This is hopefully so that employers have a more positive view on it.

---

### 3. Styling and Layout with CSS Framework

- Used **Bootstrap 5.3.0** for layout and responsiveness
- Customized typography using **Google Fonts (Poppins)**
- Applied additional custom styles for hover effects, dark mode toggle, and responsive scaling

---

### 4. JavaScript Interactivity

**a. Digital Clock**
- Implemented in `waph.html` using `Date()` and `setInterval`
- Displays live system time, updates every second

**b. Analog Clock**
- Circular clock with rotating hands via CSS transforms
- Synced with the digital clock logic

**c. Show/Hide Email**
- Toggle implemented using jQuery class manipulation
- Accessible from homepage via “Contact Me” button

**d. Extra Feature: Theme Toggle**
- Allows switching between dark and light modes
- Persisted across session

---

### 5. Public API Integration

**JokeAPI Integration**
- Fetches a new joke every 60 seconds
- Displays in `waph.html` with visible disclaimer
- Fallback error message on failure

**XKCD Comic Integration**
- Loads comic image, title, and alt-text
- Uses CORS proxy for API compatibility
- Error-resilient and styled for readability

---

### 6. JavaScript Cookies

- First-time visit triggers welcome message
- Returning visitors shown timestamp of last visit
- Stored using custom `setCookie()`/`getCookie()` functions
- Message dynamically rendered on homepage


---

### 7. Page Tracker Integration

- Used **FlagCounter** for visual country-based analytics
- Also included Google Analytics snippet for detailed tracking (placeholder ID)

---

## Learning Outcomes
With this lab, I gained hands-on experience with JavaScript timers, DOM updates, and API calls. A new thing I learned was specifically cookie management and session handling on the client-side. I also hopefully learned how to have improved layout design using CSS frameworks and responsive techniques, last website I made looked like it was straight out of the 80s, this should be better.

### Professional
- Practiced full-stack development within a constrained, deadline-driven project
- Developed clearer documentation and project structure habits
- Explored how to package technical work for public, employer-facing presentation

---

## Submission Artifacts

- PDF Report: `rune-featherston-waph-project1.pdf`
- Website URL: [https://runefeatherston.github.io](https://runefeatherston.github.io)
- GitHub Repo: [https://github.com/RuneFeatherston/RuneFeatherston.github.io](https://github.com/RuneFeatherston/RuneFeatherston.github.io)
