// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    loadProjects();
    initializeContactForm();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load and display projects
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.log('Projects file not found, showing default message');
        showDefaultProjectsMessage();
    }
}

function displayProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projects.length === 0) {
        showDefaultProjectsMessage();
        return;
    }

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card fade-in">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<i class="fas fa-code"></i>'}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" class="project-link secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="project-link primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function showDefaultProjectsMessage() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = `
        <div class="project-card fade-in">
            <div class="project-image">
                <i class="fas fa-code"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">Test Automation Framework</h3>
                <p class="project-description">
                    Comprehensive Selenium-based automation framework using Java and TestNG. 
                    Includes page object model, data-driven testing, and CI/CD integration.
                </p>
                <div class="project-tech">
                    <span class="tech-tag">Selenium</span>
                    <span class="tech-tag">Java</span>
                    <span class="tech-tag">TestNG</span>
                    <span class="tech-tag">Maven</span>
                </div>
                <div class="project-links">
                    <a href="https://github.com/apsh2023" class="project-link secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
        <div class="project-card fade-in">
            <div class="project-image">
                <i class="fas fa-bug"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">API Testing Suite</h3>
                <p class="project-description">
                    Complete API testing solution using Postman and Newman for automated 
                    REST API validation, performance testing, and CI/CD integration.
                </p>
                <div class="project-tech">
                    <span class="tech-tag">Postman</span>
                    <span class="tech-tag">Newman</span>
                    <span class="tech-tag">REST API</span>
                    <span class="tech-tag">JSON</span>
                </div>
                <div class="project-links">
                    <a href="https://github.com/apsh2023" class="project-link secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
        <div class="project-card fade-in">
            <div class="project-image">
                <i class="fas fa-chart-line"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">Test Data Management</h3>
                <p class="project-description">
                    Data-driven testing framework with MySQL integration for test data 
                    management, including data generation and cleanup automation.
                </p>
                <div class="project-tech">
                    <span class="tech-tag">SQL</span>
                    <span class="tech-tag">MySQL</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Pandas</span>
                </div>
                <div class="project-links">
                    <a href="https://github.com/apsh2023" class="project-link secondary" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.innerHTML = 'Send Message';
            submitButton.disabled = false;
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => hideNotification(notification), 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const animateElements = document.querySelectorAll('section, .project-card, .skill-category, .timeline-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Utility function to add new project (for easy updating)
function addProject(project) {
    const projectsGrid = document.getElementById('projects-grid');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card fade-in';
    projectCard.innerHTML = `
        <div class="project-image">
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<i class="fas fa-code"></i>'}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" class="project-link secondary" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>` : ''}
                ${project.demo ? `<a href="${project.demo}" class="project-link primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>` : ''}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
}

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 1001;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .notification-success {
        border-left: 4px solid #4CAF50;
    }
    
    .notification-error {
        border-left: 4px solid #f44336;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
        color: #666;
    }
    
    .notification-close:hover {
        color: #333;
    }
`;

// Add notification styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Export functions for global access (if needed)
window.portfolioUtils = {
    addProject,
    showNotification
};