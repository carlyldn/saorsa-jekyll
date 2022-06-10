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
$('.menu-container').click(function(){
    $('.menu').fadeToggle(600);
    $('.cross').fadeToggle(0);
    $('.menu-button').fadeToggle(0);
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