document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    const submitButton = form.querySelector('input[type="submit"]');
    const fullNameInput = form.querySelector('input[name="fullName"]');
    const usernameInput = form.querySelector('input[name="username"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirmPassword"]');
    const genderRadios = form.querySelectorAll('input[name="gender"]');

    const fullNameError = document.getElementById('fullNameError');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const namePattern = /^[a-zA-Z\s]{3,50}$/;
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    submitButton.disabled = true;

    function enableNextField(currentInput, nextInput, regex, errorMessageElement, errorMessage) {
        if (regex.test(currentInput.value)) {
            nextInput.disabled = false;
            errorMessageElement.textContent = '';
        } else {
            nextInput.disabled = true;
            errorMessageElement.textContent = errorMessage;
        }
    }

    fullNameInput.addEventListener('input', function() {
        enableNextField(fullNameInput, usernameInput, namePattern, fullNameError, 'Full name must be letters and spaces, between 3 and 50 characters.');
    });

    usernameInput.addEventListener('input', function() {
        enableNextField(usernameInput, emailInput, usernamePattern, usernameError, 'Username must be 3-20 characters, and can include letters, numbers, and underscores.');
    });

    emailInput.addEventListener('input', function() {
        enableNextField(emailInput, phoneInput, emailPattern, emailError, 'Please enter a valid email address.');
    });

    phoneInput.addEventListener('input', function() {
        enableNextField(phoneInput, passwordInput, phonePattern, phoneError, 'Phone number must be exactly 10 digits.');
    });

    passwordInput.addEventListener('input', function() {
        enableNextField(passwordInput, confirmPasswordInput, passwordPattern, passwordError, 'Password must be 8-20 characters, with at least one letter, one number, and one special character.');
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value === passwordInput.value) {
            confirmPasswordError.textContent = '';
            genderRadios.forEach(radio => radio.disabled = false);
            submitButton.disabled = false;
        } else {
            confirmPasswordError.textContent = 'Passwords do not match.';
            submitButton.disabled = true;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = fullNameInput.value;
        const username = usernameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!namePattern.test(fullName)) {
            fullNameError.textContent = 'Full name must be letters and spaces, between 3 and 50 characters.';
            return;
        }
        if (!usernamePattern.test(username)) {
            usernameError.textContent = 'Username must be 3-20 characters, and can include letters, numbers, and underscores.';
            return;
        }
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return;
        }
        if (!phonePattern.test(phone)) {
            phoneError.textContent = 'Phone number must be exactly 10 digits.';
            return;
        }
        if (!passwordPattern.test(password)) {
            passwordError.textContent = 'Password must be 8-20 characters, with at least one letter, one number, and one special character.';
            return;
        }
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return;
        }

        alert('Registration successful!');
        form.submit();
    });
});
