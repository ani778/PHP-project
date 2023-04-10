  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav");
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  const navLink = document.querySelectorAll(".nav-link");
  
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }
  var slider1 = new Swiper(".slider1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },
  });

  var slider3 = new Swiper(".slider3", {
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  var slider4 = new Swiper(".slider4", {
    loop: true,
    navigation: {
      nextEl: ".swiper-b-next",
      prevEl: ".swiper-b-prev",
    },
  });

  var slider2 = new Swiper(".slider2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });