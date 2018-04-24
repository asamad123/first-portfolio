// if the window is over 680 pixels in height add class and remove if the the height is less than 640px
$(document).ready(function () {
    var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 680) {
            nav.addClass("navbar", "animateJS");
        } else {
            nav.removeClass("navbar");
        }
    });
});


// hamburger animation
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  
// add and remove class for navbar on mobile sizes
  $(document).ready(function(){
    $("#hamburger").click(function(){
        $("ul").toggleClass("addNav");
    });
});