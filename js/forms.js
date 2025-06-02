document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
            contactForm.reset();
        });
    }

    const footer = document.querySelector('.footer-animated');
    if (footer) {
        footer.style.opacity = 0;
        footer.style.transform = 'translateY(40px) scale(0.98)';
        setTimeout(() => {
            footer.style.transition = 'opacity 1.1s cubic-bezier(.77,0,.18,1), transform 1.1s cubic-bezier(.77,0,.18,1)';
            footer.style.opacity = 1;
            footer.style.transform = 'translateY(0) scale(1)';
            const logo = footer.querySelector('.footer-logo');
            if (logo) logo.classList.add('animated');
        }, 400);
        footer.addEventListener('mouseenter', () => {
            footer.style.boxShadow = '0 0 40px #1abc9c77, 0 0 0 8px #388e3c22';
        });
        footer.addEventListener('mouseleave', () => {
            footer.style.boxShadow = '0 0 24px #1abc9c33';
        });
        
        const links = footer.querySelectorAll('.footer-links a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.background = '#1abc9c';
                link.style.color = '#fff';
                link.style.boxShadow = '0 2px 12px #388e3c99';
            });
            link.addEventListener('mouseleave', () => {
                link.style.background = '#388e3c';
                link.style.color = '#ffe082';
                link.style.boxShadow = '';
            });
        });
    }

    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.addEventListener('mouseenter', () => {
            table.style.boxShadow = '0 4px 24px #1abc9c55';
        });
        table.addEventListener('mouseleave', () => {
            table.style.boxShadow = '';
        });
    });
});