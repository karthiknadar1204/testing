document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! We will be in touch soon.');
    });

    // Simple animation for the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-in';
        hero.style.opacity = '1';
    }, 100);
}); 