// if the window is over 680 pixels in height add class and remove if the the height is less than 640px
// $(document).ready(function () {

// });
$(document).ready(function () {
    var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 680) {
            $('nav').show(2000);

            // nav.addClass("navbar", "animateJS");
        } else {
            // nav.removeClass("navbar");
            $('nav').hide();

        }
    });
});



// hamburger animation]
    $(".hamburger").click(function(){
        
      $(this).toggleClass("is-active");
    });
  
// add and remove class for navbar on mobile sizes
    $("#hamburger").click(function(){
        $("ul").toggleClass("addNav");
    });


