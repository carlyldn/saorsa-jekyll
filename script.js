// A $( document ).ready() block.
$( document ).ready(function() {
    $('.menu-container').click(function(){
        $('.menu').fadeToggle(600);
        $('.cross').show();
        $('.menu-button').hide();
    $('.cross').click(function(){
        $('.menu').fadeToggle(600);
        $('.menu-button').show();
        $('.cross').hide();
    })});

    // Animate on scroll
    AOS.init();
});

    // Typing Animation

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backDelay: 1000,
        backSpeed: 10,
        loop: false
    });


lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});