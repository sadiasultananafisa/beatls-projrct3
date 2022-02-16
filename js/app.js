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
   $(window).on("scroll",function(){
     if($(window).scrollTop() > $("#nav").height()){
      $("#nav").addClass("nav_anim")
     }else{
      $("#nav").removeClass("nav_anim")
     }
   })
   $('.banner_slider').slick({
    prevArrow:'<i class="banner_slider_icon fas fa-arrow-left"></i>',
    nextArrow:'<i class="banner_slider_icon fas fa-arrow-right"></i>',
    dots: true,
    dotsClass: 'banner_slider_dots',
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
  })
 });
