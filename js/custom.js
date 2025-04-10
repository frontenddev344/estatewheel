$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });

   

    $(".read-more-toggle").click(function () {
      const $btn = $(this);
      const isOpen = $btn.data("open") || false;
    
      $btn.text(isOpen ? "Read More" : "Read Less");
      $btn.data("open", !isOpen);
      
      $(".read-more-text").slideToggle();
    });
    
    
  });


  // Showcase Slider
var showcaseSwiper = new Swiper(".showcase-slider", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".showcase-next", // Unique selector
    prevEl: ".showcase-prev", // Unique selector
  },
  pagination: {
    el: ".showcase-pagination", // Unique selector
    clickable: true,
  },
});


var swiper = new Swiper('.awards-slider', {
  slidesPerView: 8, 
  spaceBetween: 42, 
  autoplay: {
    delay: 1500, 
    disableOnInteraction: false, // Keep autoplaying after interactions
  },
  loop: true, 
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 8,
    },
  },
});


var swiper = new Swiper(".popular-areas-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".custom-lang-dropdown");
  const toggle = dropdown.querySelector(".lang-toggle");
  const menu = dropdown.querySelector(".lang-menu");
  const items = menu.querySelectorAll("li");

  // Toggle dropdown
  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Handle selection
  items.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      toggle.innerHTML = `${this.textContent}`;
      dropdown.classList.remove("open");
      console.log("Language selected:", selectedLang);
      // Implement your language switching logic here
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function () {
    dropdown.classList.remove("open");
  });
});




