document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        offset: 200,          
        duration: 600,       
        easing: 'ease-in-sine', 
        delay: 100,           
        once: false,          
        mirror: true,         
    });

    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('active-nav');
        } else {
            navbar.classList.remove('active-nav');
        }
    });
});
