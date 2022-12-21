//  Target the hamburger menu icon
const hamburger = document.querySelector('#hamburger');
//  Target the close button
const btn = document.querySelector('#close-btn');
//  Target the modal menu
const modal = document.querySelector('#modal');
//  The where the user can click and dismiss the modal
const dismissArea = document.querySelector('.modal-content');
const body = document.querySelector('body');

//  Function to hide the modal
function hide() {
  // Enable body scrolling
  body.classList.toggle('stop-scrolling');
  modal.style.display = 'none';
}
//  Function to show the modal
function display() {
  // Disable body scrolling
  body.classList.toggle('stop-scrolling');
  modal.style.display = 'block';
}

// Add event on the buttons
btn.addEventListener('click', hide);
hamburger.addEventListener('click', display);

// If the user click outside the content
window.onclick = (event) => {
  if (event.target === modal || event.target === dismissArea) hide();
};

//  Get all the menu mobile links
const menuLinks = document.querySelectorAll('ul.menu-mobile-links li');
const lis = Object.values(menuLinks);
for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', hide);
}
