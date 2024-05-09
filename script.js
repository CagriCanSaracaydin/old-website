// Initialize AOS library for animations
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        offset: 200,           // Offset from element trigger point
        duration: 600,         // Animation duration
        easing: 'ease-in-sine', // Animation easing
        delay: 100,            // Delay animation
        once: false,           // Whether animation should happen only once
        mirror: true,          // Whether elements should animate out while scrolling past them
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.getElementById(this.getAttribute('href').substring(1));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('active-nav');
        } else {
            document.getElementById('navbar').classList.remove('active-nav');
        }
    });
});
