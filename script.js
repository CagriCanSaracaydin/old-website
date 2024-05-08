import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@next/dist/vue.esm-browser.prod.js';

createApp({
    data() {
        return {
            projects: [
                { title: 'Project 1', description: 'Description of Project 1', link: 'project1.html' },
                { title: 'Project 2', description: 'Description of Project 2', link: 'project2.html' }
            ]
        };
    }
}).mount('.project-gallery');

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
