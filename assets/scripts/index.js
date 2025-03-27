const $profile = document.getElementById('profile');
const $toolbar = document.getElementById('tool-bar');
const $topAnchor = document.getElementById('topAnchor');
const $contact = $toolbar.querySelector('.nav .list .item .contact');
const $header = document.getElementById('header');
const $down = $header.querySelector('.arrow > .arrow');
const $four = document.getElementById('four');
const $image = $four.querySelector('.container .portfolio .box .list .item .image-link');

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
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
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
            duration: 0.75,
            ease: 'power2',
            animateProps: {
                opacity: 0
            }
        }
    }, gsap);

}