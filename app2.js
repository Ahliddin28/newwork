document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

var swiper = new Swiper(".mySwiper", {
  loop:true,
  spaceBetween: 30,

  
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let btn1 = document.querySelector('#dbtn')
let down = document.querySelector('#down')
btn1.addEventListener('click', function() {
  down.classList.toggle('is-activee');
  btn1.classList.toggle('rot')
})
let btn2 = document.querySelector('#dbtn2')
let down2 = document.querySelector('#down2')
btn2.addEventListener('click', function() {
  down2.classList.toggle('is-activee');
  btn2.classList.toggle('rot')
})
let btn3 = document.querySelector('#dbtn3')
let down3 = document.querySelector('#down3')
btn3.addEventListener('click', function() {
  down3.classList.toggle('is-activee');
  btn3.classList.toggle('rot')
})