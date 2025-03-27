const $profile = document.getElementById('profile');
const $toolbar = document.getElementById('tool-bar');
const $topAnchor = document.getElementById('topAnchor');
const $contact = $toolbar.querySelector(':scope > .nav > .list > .item > .contact');
const $one = document.getElementById('one');
const $title = document.querySelector(':scope > .header > .header-title > .title')
const $header = document.getElementById('header');
const $down = $header.querySelector(':scope > .arrow > .arrow');
const $four = document.getElementById('four');
const $image = $four.querySelector(':scope > .container > .portfolio > .box > .list > .item > .image-link');

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
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll(':scope > #tool-bar .nav .list .item .link');
    navLinks.forEach(link => {
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
});

$down.onclick =() => window.scrollTo({top: 1000, behavior: "smooth"});


let isProfile = false;

function toggleProfile(event) {
    event.stopPropagation();
    isProfile ? openProfile() : closeProfile()
}
const openProfile  = () =>{
    isProfile = true;
    $profile.classList.add('visible');
};
const closeProfile = () => {
    isProfile = false;
    $profile.classList.remove('visible');
}
$contact.onclick = () => openProfile();

$contact.addEventListener('click', toggleProfile);

const profileOutside = () => {
    if (isProfile===true && !$contact.contains(event.target)) {
        closeProfile();
    }
};
document.addEventListener('click', profileOutside);

