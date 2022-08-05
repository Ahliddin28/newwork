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
let btn1 = document.querySelector('#dbtn')
let down = document.querySelector('#down')
btn1.addEventListener('click', function() {
  down.classList.toggle('is-activee');
  btn1.classList.toggle('rot')
})  
let btn2 = document.querySelector('#dbtn2')
let down2= document.querySelector('#down2')
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
let btn4 = document.querySelector('#dbtn4')
let down4 = document.querySelector('#down4')
btn4.addEventListener('click', function() {
  down4.classList.toggle('is-activee');
  btn4.classList.toggle('rot')
})  
let btn5 = document.querySelector('#dbtn5')
let down5 = document.querySelector('#down5')
btn5.addEventListener('click', function() {
  down5.classList.toggle('is-activee');
  btn5.classList.toggle('rot')
})  
let btn6 = document.querySelector('#dbtn6')
let down6 = document.querySelector('#down6')
btn6.addEventListener('click', function() {
  down6.classList.toggle('is-activee');
  btn6.classList.toggle('rot')
})  

