// Menu show and hide
// $( document ).ready(function() {
// $('.menu-container').click(function(){
//     $('.menu').fadeToggle(600);
//     $('.cross').show();
//     $('.menu-button').hide();
// });

// $('.cross').click(function(){
//     $('.menu').fadeToggle(600);
//     $('.menu-button').show();
//     $('.cross').hide();
// });

$( document ).ready(function() {
$('.burger-container').click(function(){
    $('.mob-menu').fadeToggle(600);
    $('.cross').fadeToggle(0);
    $('.mob-logo').fadeToggle(0);
    $('.burger-button').fadeToggle(0);
});

    // Animate on scroll
    AOS.init();
});

// Slider Gallery
$('.slider-container').slick({
	autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 2000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: true, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});

    // Typing Animation
    // If the #typed element comes into the viewport, this callback will be run
const viewportObserver = new IntersectionObserver((entries, observer) => {
    // If #typed is within the viewport
    if (entries[0].isIntersecting) {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        showCursor: false,
        typeSpeed: 70,
        backDelay: 1000,
        backSpeed: 10,
        loop: false
    });
    observer.unobserve(document.querySelector('#typed'))
  }
})
// Instruct the IntersectioObserver to observe the #typed element
viewportObserver.observe(document.querySelector('#typed'))

// Accordion java
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Accordion javascript
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// Cookie banner 

function createCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name,"",-1);
}
if(readCookie('cookie-notice-dismissed')=='true') {
  // Add tracking scripts here 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-233269910-1');
  // End tracking scripts 
} else {
  document.getElementById('cookie-notice').style.display = 'block';
}
document.getElementById('cookie-notice-accept').addEventListener("click",function() {
  createCookie('cookie-notice-dismissed','true',31);
  document.getElementById('cookie-notice').style.display = 'none';
  location.reload();
});
// document.querySelector("#close-cookie-banner").addEventListener("click", (e) => {
  
//   document.querySelector("#cookie-notice").style.display = 'none';
// });


// // Get button element
// const buttonElement = document.querySelector('.cookie-dismiss');


// Jotform

var $ = jQuery.noConflict();

jQuery(document).ready(function(jQuery) {

"use strict";

$('iframe').contents().find("head").append($("<style type='text/css'>  div.formFooter{ display:none !important; } .jf-branding{ display: none !important; } div.form-footer{ display: none !important; } </style>"));

});