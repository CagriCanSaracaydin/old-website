new Vue({
    el: '.project-gallery',
    data: {
        projects: [
            { title: 'Project 1', description: 'Description of Project 1', link: 'project1.html' },
            { title: 'Project 2', description: 'Description of Project 2', link: 'project2.html' }
        ]
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
