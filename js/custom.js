$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });

   

$('.learn-more').click(function(){

    $(this).toggleClass('active');

    $(this).next(".hidden-content").slideToggle(500);

});
    
    
});


// swiper slider 

let swiper = new Swiper(".bookSwiper", {

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 800,

  pagination: {
    el: ".book-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".book-next",
    prevEl: ".book-prev",
  },

  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    }

  }

});


// testimonial slider 

let testimonialswiper = new Swiper(".testimonialSlider", {

    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    speed:800,

    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },

    pagination:{
        el:".testimonial-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".testimonial-next",
        prevEl:".testimonial-prev",
    }

});

