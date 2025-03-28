const $profile = document.getElementById('profile');
const $toolbar = document.getElementById('tool-bar');
const $topAnchor = document.getElementById('topAnchor');
const $contact = $toolbar.querySelector('.nav .list .item .contact');
const $header = document.getElementById('header');
const $down = $header.querySelector('.arrow > .arrow');
const $four = document.getElementById('four');
const $image = $four.querySelector('.container .portfolio .box .list .item .image-link');
const $rotate =document.getElementById('rotate');
const $rotateText = $rotate.querySelectorAll('.caption');

let isProfileOpen = false;

$image.addEventListener('click', function(e) {
    e.preventDefault();
});

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 50) {
        $topAnchor.classList.add('visible');
    } else {
        $topAnchor.classList.remove('visible');
    }
});

document.querySelectorAll('#tool-bar .nav .list .item .link').forEach(link => {
    if (link.classList.contains('content-btn')) return;

    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        console.log(targetId);
        const targetSection = document.querySelector(targetId);
        console.log(targetSection);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop + 300,
                behavior: "smooth"
            });
            console.log(top);
        }
    });
});

$down.addEventListener('click', () => {
    window.scrollTo({top: 1000, behavior: "smooth"});
});

function toggleProfile(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isProfileOpen) {
        closeProfile();
    } else {
        openProfile();
    }
}

function openProfile() {
    isProfileOpen = true;
    $profile.classList.add('visible');
}

function closeProfile() {
    isProfileOpen = false;
    $profile.classList.remove('visible');
}

$contact.addEventListener('click', toggleProfile);

document.addEventListener('click', function(event) {

    if (isProfileOpen && !$profile.contains(event.target) && !$contact.contains(event.target)) {
        closeProfile();
    }
});

document.addEventListener('DOMContentLoaded', function() {
   initTextAnimations();
});


function initTextAnimations() {
    new Textify({
        el: '[data-textify="welcome"]',
        animation: {
            delay: 0.5,
            duration: 1,
            animateProps: {
                opacity: 0
            }
        }
    }, gsap);


    new Textify({
        el: '[data-textify="name"]',
        animation: {
            delay: 1.25,
            duration: 0.5,
            ease: 'power2',
            animateProps: {
                opacity: 0
            }
        }
    }, gsap);


}

document.addEventListener("DOMContentLoaded", function () {
    const text = $rotate.querySelectorAll(  '.caption');
    let index = 0;
    text[index].classList.add('active');

    setInterval(function() {
        text[index].classList.remove('active');
        text[index+1].classList.add('active');
        index = (index+1) % text.length;
    },500);


});


