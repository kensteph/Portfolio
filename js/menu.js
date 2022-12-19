let btn = document.querySelector('#close-btn');

let modal=document.querySelector('#modal');

function hide() {
    modal.style.display='none';
}

function display() {
    modal.style.display='block';
}

btn.addEventListener('click',hide);

let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click',display);

