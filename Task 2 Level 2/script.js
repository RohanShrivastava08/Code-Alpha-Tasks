document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links in navbar
    const navbarLinks = document.querySelectorAll('.navbar ul li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Responsive navigation menu
    const burgerIcon = document.querySelector('.burger-icon');
    const navbar = document.querySelector('.navbar ul');

    burgerIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        navbar.classList.toggle('show');
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', validateForm);

    function validateForm(e) {
        e.preventDefault();
        
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Additional email validation if needed

        alert('Form submitted successfully!');
        contactForm.reset();
    }

    // Animation Effects
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', animateButton);
    });

    function animateButton(e) {
        e.target.style.backgroundColor = '#555';
        e.target.style.color = '#fff';
        e.target.style.transform = 'scale(1.1)';
    }

    buttons.forEach(button => {
        button.addEventListener('mouseout', resetButton);
    });

    function resetButton(e) {
        e.target.style.backgroundColor = '#333';
        e.target.style.color = '#fff';
        e.target.style.transform = 'scale(1)';
    }
});
