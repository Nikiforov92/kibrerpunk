var swiper = new Swiper(".slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    effect: "fade",

    // отключаем ручное переключение слайдов
    allowTouchMove:false,

    // стартовый слайд
    initialSlide: 0,

    // бесконечный слайдер
    loop: true,

    // автопрокрутка 
    autoplay: {
        // пауза между прокруткой
        delay: 6000,
        // закончить на послледнем слайде
        stopOnInteraction: false,
        // отключить после ручного переключения
        disableOninteraction: false
    }
  });