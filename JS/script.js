
$(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    dots:true,
    arrows:true,
    nav:true,
    navText : ['<i class="ri-arrow-left-s-line owl-prev"></i>','<i class="ri-arrow-right-s-line owl-next"></i>'],
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:4,
            loop:true
        }
    }
});

const menuOpen = document.querySelector('.ri-menu-add-line')
const menuClose = document.querySelector('.ri-close-circle-fill')
const navMenu = document.querySelector('#navlinks')
menuOpen.addEventListener('click', function(){
    navMenu.style.left = '50%'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
})

menuClose.addEventListener('click', function(){
    navMenu.style.left = '-50%'
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
})

const navLists = document.querySelectorAll('li')
navLists.forEach((element) => {
    element.addEventListener('click', function(){
        navMenu.style.left = '-50%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    })
})

//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}