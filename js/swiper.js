const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,

  pagination: {
      el: '.swiper-pagination',
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  scrollbar: {
      el: '.swiper-scrollbar',
  },

  on: {
      slideChange: function () {
          console.log("🔹 Swiper triggered slide change");
          if (typeof pauseYouTubeVideo === "function" && isYouTubeReady) {
              console.log("✅ Calling pauseYouTubeVideo()");
              pauseYouTubeVideo();
          } else {
              console.warn("⚠️ YouTube is not ready yet, skipping pause.");
          }
      }
  }
});