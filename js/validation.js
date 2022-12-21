//  Target the form and its children
const contactForm = document.querySelector('#contact-form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error-msg');

contactForm.addEventListener('submit', (e) => {
  //  Prevent the form submit
  e.preventDefault();
  // Verify the email
  const emailValue = email.value;
  if (emailValue.toLowerCase() === emailValue) {
    errorMessage.innerHTML = '';
    //  Submit the form
    contactForm.submit();
    // Reset the form
    contactForm.reset();
  } else {
    errorMessage.innerHTML = 'Please, enter your email in lower case ( For example : stephanie@gmail.com)';
  }
});