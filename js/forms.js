document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const contactForm = document.getElementById("contactForm");

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", () => {
            alert("Découvrez plus sur la biodiversité et les menaces dans les sections dédiées !");
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
            contactForm.reset();
        });
    }

    // Animation d'apparition des articles
    function animateArticles() {
        const articles = document.querySelectorAll('.biodiv-articles article, .menace-articles article');
        articles.forEach((art, i) => {
            art.style.opacity = 0;
            setTimeout(() => {
                art.style.transition = 'opacity 0.8s';
                art.style.opacity = 1;
            }, 200 + i * 200);
        });
    }

    animateArticles();

    // Animation d'apparition et d'effets JS pour le footer
    const footer = document.querySelector('.footer-animated');
    if (footer) {
        footer.style.opacity = 0;
        footer.style.transform = 'translateY(40px) scale(0.98)';
        setTimeout(() => {
            footer.style.transition = 'opacity 1.1s cubic-bezier(.77,0,.18,1), transform 1.1s cubic-bezier(.77,0,.18,1)';
            footer.style.opacity = 1;
            footer.style.transform = 'translateY(0) scale(1)';
            // Animation du logo
            const logo = footer.querySelector('.footer-logo');
            if (logo) logo.classList.add('animated');
        }, 400);
        // Animation sur hover du footer
        footer.addEventListener('mouseenter', () => {
            footer.style.boxShadow = '0 0 40px #1abc9c77, 0 0 0 8px #388e3c22';
        });
        footer.addEventListener('mouseleave', () => {
            footer.style.boxShadow = '0 0 24px #1abc9c33';
        });
        // Animation sur les liens du footer
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

    // Animation sur les tableaux
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.addEventListener('mouseenter', () => {
            table.style.boxShadow = '0 4px 24px #1abc9c55';
        });
        table.addEventListener('mouseleave', () => {
            table.style.boxShadow = '';
        });
    });

    // Animation sur les quiz
    const quizBtns = document.querySelectorAll('.biodiv-quiz button, .menace-quiz button');
    quizBtns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.background = '#388e3c';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.background = '#1abc9c';
        });
    });

    // Animation sur les liens internes d'articles
    const articleLinks = document.querySelectorAll('.biodiv-articles a, .menace-articles a');
    articleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').replace('#','');
            const target = document.getElementById(targetId);
            if(target) {
                e.preventDefault();
                target.scrollIntoView({behavior:'smooth'});
                target.style.background = '#e0f7fa';
                setTimeout(()=>target.style.background='', 1200);
            }
        });
    });
});

// Quiz Biodiversité
function checkBiodivQuiz() {
    let score = 0;
    if(document.querySelector('input[name="q1"]:checked')?.value === "31") score++;
    if(document.querySelector('input[name="q2"]:checked')?.value === "Abeille") score++;
    if(document.querySelector('input[name="q3"]:checked')?.value === "Drainage") score++;
    document.getElementById('quizResult').innerHTML = `<strong>Votre score : ${score}/3</strong> ${score === 3 ? 'Bravo !' : 'Essayez encore !'}`;
}

// Quiz Menaces
function checkMenaceQuiz() {
    let score = 0;
    if(document.querySelector('input[name="q1"]:checked')?.value === "Agriculture") score++;
    if(document.querySelector('input[name="q2"]:checked')?.value === "CO2") score++;
    if(document.querySelector('input[name="q3"]:checked')?.value === "Recyclage") score++;
    document.getElementById('menaceQuizResult').innerHTML = `<strong>Votre score : ${score}/3</strong> ${score === 3 ? 'Bravo !' : 'Essayez encore !'}`;
}