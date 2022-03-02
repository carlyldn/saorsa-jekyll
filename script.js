// A $( document ).ready() block.
$( document ).ready(function() {
    $('.menu-container').click(function(){
        $('.menu').fadeToggle(600);
        $(this).toggleClass('active');
  });

    // Animate on scroll
    AOS.init();
});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});