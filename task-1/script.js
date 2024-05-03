document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var form = document.getElementById('demo-form');
    var requiredMessage = document.querySelector('.form__required');
    var btnSubmit = document.querySelector('.btn__pink');
    var btnBorder = document.querySelector('.btn__border--pink');
    var btnText = document.querySelector('.btn__text--3');
    var arrow = document.querySelector('.btn__text--span');
    var inputs = form.querySelectorAll('.form__input, input[type="checkbox"]');
    var allValid = true;
    var emailInput = document.getElementById('email');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementById('email-error');
    var checkmark = document.querySelector('.checkmark');
    (_a = document.querySelector('.btn__dark-blue')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var textContent = 'This is a test text, created for the exercise purposes, you can add a lot of bullsh*t here :)!\n';
        var blob = new Blob([textContent], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'test.txt';
        link.click();
        URL.revokeObjectURL(url);
    });
    (_b = document.querySelector('.btn__light-blue')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var _a;
        (_a = document.querySelector('.second')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    });
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!emailPattern.test(emailInput.value.trim())) {
            event.preventDefault(); // Stop form submission
            emailError.style.display = 'inline'; // Show error message
        }
        else {
            emailError.style.display = 'none'; // Hide error message
        }
        inputs.forEach(function (input) {
            var formControl = input;
            //
            if (formControl.type !== 'checkbox' && formControl.value.trim() === '') {
                formControl.classList.add('invalid');
                checkmark.classList.add('invalid');
                allValid = false;
            }
            else if (!formControl.checkValidity()) {
                formControl.classList.add('invalid');
                checkmark.classList.add('invalid');
                allValid = false;
            }
            else {
                formControl.classList.remove('invalid');
                checkmark.classList.remove('invalid');
            }
        });
        if (!allValid) {
            requiredMessage.classList.add('error');
        }
        else {
            requiredMessage.classList.remove('error');
        }
        if (allValid) {
            btnText.textContent = 'Success!';
            btnText.classList.add('success');
            btnBorder.classList.add('final');
            btnSubmit.classList.add('active');
            arrow === null || arrow === void 0 ? void 0 : arrow.remove();
        }
    });
});
