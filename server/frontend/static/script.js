// script.js
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const aboutSection = document.getElementById('about-section');
    const contactSection = document.getElementById('contact-section');

    // عند الضغط على About
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSection.style.display = 'block';
        contactSection.style.display = 'none';
        aboutLink.classList.add('active');
        contactLink.classList.remove('active');
    });

    // عند الضغط على Contact
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSection.style.display = 'none';
        contactSection.style.display = 'block';
        contactLink.classList.add('active');
        aboutLink.classList.remove('active');
    });
});
