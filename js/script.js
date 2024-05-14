document.addEventListener("DOMContentLoaded", () => {
    // AOS Initialization
    AOS.init({
        offset: 200,          
        duration: 600,       
        easing: 'ease-in-sine', 
        delay: 100,           
        once: false,          
        mirror: true,         
    });

    // Smooth Scrolling with Native JavaScript
    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust offset for fixed navbar
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Active Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('active-nav');
        } else {
            navbar.classList.remove('active-nav');
        }
    });
}); 