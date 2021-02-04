const nav = document.querySelector('nav');

window.addEventListener('scroll', setNavbarColor);

function setNavbarColor(e){
    if (window.pageYOffset >= 45) {
        nav.classList.add('solid-navbar');
    } else {
        nav.classList.remove('solid-navbar');
    }
}