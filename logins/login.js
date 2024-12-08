document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const submitButton = form.querySelector('input[type="submit"]');
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const emailError = document.createElement("p");
    const passwordError = document.createElement("p");
    form.append(emailError, passwordError);

    submitButton.disabled = true;

    function validateEmail() {
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            submitButton.disabled = true;
        } else {
            emailError.textContent = '';
            enableSubmitButton();
        }
    }

    function validatePassword() {
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters, contain uppercase, lowercase, number, and a special character.';
            submitButton.disabled = true;
        } else {
            passwordError.textContent = '';
            enableSubmitButton();
        }
    }

    function enableSubmitButton() {
        if (emailPattern.test(emailInput.value) && passwordPattern.test(passwordInput.value)) {
            submitButton.disabled = false;
        }
    }

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login successful!');
    });
});
