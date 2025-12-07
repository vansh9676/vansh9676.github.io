// Toggle Resume Display
function toggleResume() {
    const resumeContent = document.getElementById('resumeContent');
    if (resumeContent.style.display === 'none') {
        resumeContent.style.display = 'block';
    } else {
        resumeContent.style.display = 'none';
    }
}

// Download Resume as Text File
function downloadResume() {
    const resumeText = `
Vansh
Panipat, Harayana (India) | (+91)9671766584 | jaatvansh5556@gmail.com | linkedin.com/in/vansh-kharb

═══════════════════════════════════════════════════════════════

PROFESSIONAL SUMMARY
Motivated Computer Science student and aspiring Web Developer with a strong foundation in frontend technologies. Passionate about building responsive, user-friendly websites. Eager to apply skills in HTML, CSS, JavaScript, and Node.js to solve real-world problems.

═══════════════════════════════════════════════════════════════

EXPERIENCE / PROJECTS

Web Developer (Personal Project)
Personal Portfolio Website | July 2025 - Present (5 Months)
• Designed and developed a fully responsive personal portfolio website from scratch.
• Implemented interactive features using pure JavaScript, including dynamic forms and navigation.
• Deployed and hosted the application on GitHub Pages, ensuring 99% uptime.
• Continuously refined the UI/UX design over a 5-month period to improve accessibility and aesthetics.

═══════════════════════════════════════════════════════════════

EDUCATION
Bachelor of Computer Applications (BCA) - 5th Semester
Kurukshetra University (KUK) | 2023 - 2026 (Expected)

═══════════════════════════════════════════════════════════════

SKILLS

Technical:
HTML5, CSS3, JavaScript (ES6+), Node.js, GitHub/Git

Soft Skills:
Problem Solving, Creative Thinking, Time Management, Adaptability

Languages:
English, Hindi

═══════════════════════════════════════════════════════════════
    `;

    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(resumeText);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Vansh_Resume.txt");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// Smooth Scroll for Navigation Links
// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // If it's an in-page anchor (like #about), do smooth scroll
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // else: normal links like "payment.html" are NOT prevented,
        // browser will open the page normally
    });
});

