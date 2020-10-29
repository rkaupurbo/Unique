new WOW().init();


 //initiating jQuery
              jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
                  $('.navbar-wrapper').stickUp();
                });
              });


              $('.counter').counterUp({
    delay: 10,
    time: 1000
});