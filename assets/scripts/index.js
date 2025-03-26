const $profile = document.getElementById('profile');
const $header = document.getElementById('header');
const $contact = $header.querySelector(':scope > .nav > .list > .item > .link.contact');



$contact.onclick = () => {
    $profile.classList.add('visible');
}