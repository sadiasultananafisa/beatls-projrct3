$(window).on('load', function () {
    $('.preloader').fadeOut(1000);
 })
$(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn()
         } else {
            $('#backToTop').fadeOut(1000)
         }
    })
    $('#backToTop').on('click', function () {
       $('html,body').animate({
          scrollTop: 0,
       },2000)
    })
   $("a").on("click", function (event) {
     event.preventDefault();
     if (this.hash !== "") {
       var hash = this.hash;
 
       $("html,body").animate(
         {
           scrollTop: $(hash).offset().top,
         },
         1000
       );
     }
   });
 
  // $('.fade').slick({
   //   dots: true,
    //  infinite: true,
     // speed: 500,
    //  fade: true,
    //  cssEase: 'linear'
   // });
 });
