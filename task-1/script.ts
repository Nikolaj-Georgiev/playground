document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demo-form') as HTMLFormElement;
  const requiredMessage = document.querySelector(
    '.form__required'
  ) as HTMLSpanElement;
  const btnSubmit = document.querySelector('.btn__pink') as HTMLButtonElement;
  const btnBorder = document.querySelector('.btn__border--pink') as HTMLElement;
  const btnText = document.querySelector(
    '.btn__text--3'
  ) as HTMLParagraphElement;
  const arrow = document.querySelector('.btn__text--span') as HTMLSpanElement;

  const inputs = form.querySelectorAll('.form__input, input[type="checkbox"]');
  let allValid = true;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById('email-error') as HTMLSpanElement;
  const checkmark = document.querySelector('.checkmark') as HTMLSpanElement;

  document.querySelector('.btn__dark-blue')?.addEventListener('click', () => {
    const textContent: string =
      'This is a test text, created for the exercise purposes, you can add a lot of bullsh*t here :)!\n';
    const blob: Blob = new Blob([textContent], { type: 'text/plain' });
    const url: string = URL.createObjectURL(blob);
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = 'test.txt';
    link.click();
    URL.revokeObjectURL(url);
  });

  document.querySelector('.btn__light-blue')?.addEventListener('click', () => {
    document.querySelector('.second')?.scrollIntoView({ behavior: 'smooth' });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailPattern.test(emailInput.value.trim())) {
      event.preventDefault(); // Stop form submission
      emailError.style.display = 'inline'; // Show error message
    } else {
      emailError.style.display = 'none'; // Hide error message
    }

    inputs.forEach((input) => {
      const formControl = input as
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement;
      //
      if (formControl.type !== 'checkbox' && formControl.value.trim() === '') {
        formControl.classList.add('invalid');
        checkmark.classList.add('invalid');

        allValid = false;
      } else if (!formControl.checkValidity()) {
        formControl.classList.add('invalid');
        checkmark.classList.add('invalid');
        allValid = false;
      } else {
        formControl.classList.remove('invalid');
        checkmark.classList.remove('invalid');
      }
    });

    if (!allValid) {
      requiredMessage.classList.add('error');
    } else {
      requiredMessage.classList.remove('error');
    }

    if (allValid) {
      btnText.textContent = 'Success!';
      btnText.classList.add('success');
      btnBorder.classList.add('final');
      btnSubmit.classList.add('active');
      arrow?.remove();
    }
  });
});
