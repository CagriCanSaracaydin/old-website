import { createApp } from 'vue'; // Import createApp

createApp({ // Create Vue app instance
    data() {
        return {
            projects: [
                { title: 'Project 1', description: 'Description of Project 1', link: 'project1.html' },
                { title: 'Project 2', description: 'Description of Project 2', link: 'project2.html' }
                // Add more projects as needed
            ]
        };
    }
}).mount('.project-gallery'); // Mount the app to the element with class 'project-gallery'

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error("No section found for:", this.getAttribute('href'));
            }
        });
    });
});
