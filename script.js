// A $( document ).ready() block.
// $( document ).ready(function() {
//     $('.menu-container').click(function(){
//         $('.menu').fadeToggle(600);
//         $('.cross').show();
//         $('.menu-button').hide();
//     $('.cross').click(function(){
//         $('.menu').fadeToggle(600);
//         $('.menu-button').show();
//         $('.cross').hide();
//     })});

$( document ).ready(function() {
$('.menu-container').click(function(){
    $('.menu').fadeToggle(600);
    $('.cross').show();
    $('.menu-button').hide();
});

$('.cross').click(function(){
    $('.menu').fadeToggle(600);
    $('.menu-button').show();
    $('.cross').hide();
});

    // Animate on scroll
    AOS.init();
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


// lightGallery(document.getElementById('lightgallery'), {
//     speed: 500,
//     download: false
// });