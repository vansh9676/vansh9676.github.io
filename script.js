document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 2. Parallax Hover Effect (Optional - adds extra polish)
    const cards = document.querySelectorAll('.card-inner');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), rgba(30,41,59,0.6))`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--card-bg)';
        });
    });
});