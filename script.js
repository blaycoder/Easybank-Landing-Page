const toggle_btn = document.querySelector(".dropdown-toggle");
const close = document.querySelector(".close-toggle");
const navBarNav = document.querySelector(".navbar-nav");
const bgOpacity = document.querySelector(".bg-opacity");

toggle_btn.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

function toggleMenu (){
    if(navBarNav.classList.contains('active')){
        navBarNav.classList.remove('active');
        close.style.display = 'none';
        toggle_btn.style.display = 'block';
        bgOpacity.style.filter = 'none'; 
    }
    else {
        navBarNav.classList.add('active');
        close.style.display = 'block';
        toggle_btn.style.display = 'none';
        bgOpacity.style.filter = 'brightness(90%)';
    }
}

let navItems = document.querySelectorAll('.nav-item');
navItems.forEach (
    function(navItem){
        navItem.addEventListener("click", toggleMenu);
    }
)