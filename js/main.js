// Слайдер Swiper

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

  // Маска для телефона inputmask 
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// валидация форм
let validateforms = function(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function(form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();

      zhr.onreadystatechage = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log ('Отправлено');
          }
        }
      }

      xhr.open('POST', 'php/mail.php', true);
      xhr.send(formData);

      form.reset();
    }
  });
}

validateforms('.contact-form', {
  email: {required: true, email: true}, 
  tel: {required: true}, 
  name:{required: true, minLength: 2, maxLength: 15},
  checkbox: {required: true},
  file: {required: true}
})

