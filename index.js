var slider1 = new Swiper(".slider1", {
    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },
  });

  var slider3 = new Swiper(".slider3", {
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  var slider4 = new Swiper(".slider4", {
    navigation: {
      nextEl: ".swiper-b-next",
      prevEl: ".swiper-b-prev",
    },
  });

  var slider2 = new Swiper(".slider2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });