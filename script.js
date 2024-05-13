document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        offset: 200,          
        duration: 600,       
        easing: 'ease-in-sine', 
        delay: 100,           
        once: false,          
        mirror: true,         
    });

    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let target = document.getElementById(this.getAttribute('href').substring(1));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('active-nav');
        } else {
            document.getElementById('navbar').classList.remove('active-nav');
        }
    });
});