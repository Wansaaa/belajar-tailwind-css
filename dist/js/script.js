// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Overlay
// const elementclose = document.getElementsByClassName('overlay');

// for (let i = 0; i < elementclose.length; i++) {
//   elementclose[i].addEventListener('click', function () {
//     let url = window.location.href.substr(0, window.location.href.indexOf('#'));
//     window.location = url;
//   });
//   // document.location.href = 'index.html#portfolio';
// }

// Overlay
// const elementclose = document.querySelector('#boostrap');

// elementclose.addEventListener('click', function () {
//   elementclose.classList.add('opacity-0');
//   document.location.href = 'index.html#portfolio';
//   // elemenClose.classList.add('flex');
// });


// const closeImage = document.querySelector('#kalkulator');

// closeImage.addEventListener('click', function () {
//   closeImage.classList.add('opacity-0');
//   document.location.href = 'index.html#portfolio';
//   // elemenClose.classList.add('flex');
// });
// const closegambar = document.querySelector('#ultah');

// closegambar.addEventListener('click', function () {
//   closegambar.classList.add('opacity-0');
//   document.location.href = 'index.html#portfolio';
//   // elemenClose.classList.add('flex');
// });
// const closeGambar = document.querySelector('#php');

// closeGambar.addEventListener('click', function () {
//   closeGambar.classList.add('opacity-0');
//   document.location.href = 'index.html#portfolio';
//   // elemenClose.classList.add('flex');
// });

const overlay = document.querySelectorAll('.overlay');

for (let i = 0; i < overlay.length; i++) {
  // const overlay = overlay[i];
  // console.log(i);  
  overlay[i].addEventListener('click', function(){
    // overlay[i].classList.add('opacity-0');
    document.location.href = 'index.html#portfolio';
  });
}

// overlay.forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.target.parentElement.classList.add('hidden');
//     setTimeout(function() {
//       e.target.parentElement.classList.remove('hidden');
//     }, 500);
//     // e.target.style.display = 'none';
//   });
// });