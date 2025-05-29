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