document.addEventListener('DOMContentLoaded', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.getElementById('nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('showing');
        });
    }

    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            var email = document.getElementById('email').value;
            var confirmEmail = document.getElementById('confirmEmail').value;
            var errorMessage = document.getElementById('error-message');

            if (email !== confirmEmail) {
                errorMessage.textContent = 'Emails do not match. Please make sure both email fields match.';
                errorMessage.style.display = 'block';
                event.preventDefault();
            } else {
                errorMessage.style.display = 'none';
            }
        });
    }
});