let navBar = document.getElementById('nav_bar');
let bannerHeight = document.getElementById('banner').offsetHeight;

document.addEventListener('scroll', function(e) {
    if(window.scrollY > bannerHeight) {
        navBar.classList.add('scrolled');
    }
    else{
        navBar.classList.remove('scrolled');
    }
});

// let skillBar = document.getElementById('skill-bar');
// let progressLine = document.getElementById('p-line');

// document.addEventListener('scroll', function (e) {
//     if(window.scrollY > skillBar.offsetHeight) {
//         progressLine.classList.add('barAnimated');
//     }
// });