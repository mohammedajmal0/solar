

// reduce scrollbar height when scrolled 
let navbar = document.querySelector('.header');

window.addEventListener('scroll',function(){
    if(window.scrollY > 500){
        navbar.classList.add('scroll-header');
    }
    else{
        navbar.classList.remove('scroll-header');
    }
}) 



// mobile menu
function mobileMenuShow(){
    let menu = document.querySelector('.menu');
    let menuIcon = document.querySelector('.menu-icon');
    let crossIcon = document.querySelector('.cross-icon');
    menuIcon.style.display = 'none';
    crossIcon.style.display = 'block';
    menu.style.display = 'flex';
    menu.classList.add('mobile-menu-item');
}
function mobileMenuHide(){
    let menu = document.querySelector('.menu');
    let menuIcon = document.querySelector('.menu-icon');
    let crossIcon = document.querySelector('.cross-icon');
    menuIcon.style.display = 'block';
    crossIcon.style.display = 'none';
    menu.style.display = 'none';
    menu.classList.add('mobile-menu-item');
}