document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        offset: 200,          
        duration: 600,       
        easing: 'ease-in-sine', 
        delay: 100,           
        once: false,          
        mirror: true,         
    });

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
