const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    on: {
        slideChange: function () {
            if (typeof pauseYouTubeVideo === "function" && isYouTubeReady) {
                pauseYouTubeVideo();
            } 
        }
    }
});