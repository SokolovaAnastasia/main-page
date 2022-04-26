document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header2__btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header2__container");

      document.querySelectorAll(".header2__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");

        }
      });

      document.querySelectorAll(".header2__container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-header2__listitem");
        }
      })
      dropdown.classList.toggle("active-header2__listitem");
      btn.classList.toggle("active--btn")
    })
  })
  document.querySelectorAll(".header2__container__list").forEach(item => {
    new SimpleBar(item, {
      autoHide: false,
      scrollbarMaxSize: 30,
    });
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".list")) {
      document.querySelectorAll(".header2__container").forEach(el => {
        el.classList.remove("active-header2__listitem");
      })
      document.querySelectorAll(".header2__btn").forEach(el => {
        el.classList.remove("active--btn");
      });
    }
  })
});
const element = document.querySelector('#selectCustom');
const choices = new Choices(element);


var swiper = new Swiper(".swiper1", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    hide: true,
  },
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.benefits__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    592: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1420: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});
$(function () {
  $("#accordion").accordion({
  heightStyle: "content"
});

});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__btnitem').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__tab').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__tab_active')
        document.querySelectorAll('.catalog__btnitem').forEach(function (tabBtn) {
          tabBtn.classList.remove('acc-link-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab_active')
      })
      this.classList.add("acc-link-active")
    })
  })
})

var swiper = new Swiper(".mySwiper-sob", {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.sob__next',
    prevEl: ".sob__prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  a11y: {
    enabled: true,
  },
  breakpoints: {
    // when window width is >= 320px
    592: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }

});
var swiper = new Swiper(".mySwiper-proekt", {
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".proekt__next",
    prevEl: ".proekt__prev",
  },
  breakpoints: {
    // when window width is >= 320px
    592: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,

    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 42,
      slidesPerGroup: 2,
    },
    1420: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 38,
      slidesPerGroup: 3,
    }
  }
});
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
new JustValidate('.kontakt__form', {
  colorWrong: "#D11616",
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30

    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Поле должно содержать минимум 2 символа',
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Укажите корректный номер телефона',
    },
  }
});
$('#inputtext').on('keypress', function () {
  var that = this;
  setTimeout(function () {
    var res = /[^а-я ]/g.exec(that.value);
    that.value = that.value.replace(res, '');
  }, 0);
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.759910, 37.613375],
    zoom: 14.245,
    controls: ['smallMapDefaultSet']
  }, {
    searchControlProvider: 'yandex#search'
  });
  myMap.controls.remove('searchControl');
  myMap.controls.remove('geolocation');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('geolocationControl');
  myMap.controls.add('geolocationControl', {
    float: 'none',
    position: {
      top: '354px',
      left: '1870px'
    }
  });
  myMap.controls.remove('zoomControl');
  myMap.controls.add('zoomControl', {
    float: 'none',
    size: "small",
    position: {
      top: '260px',
      left: '1870px'
    }
  });
  myMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([55.759910, 37.613375], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/tochka.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(myPlacemark);

});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header1__boorg').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('menuactive')
    document.querySelector('#body').classList.toggle('body')
    document.querySelector('#header1__boorgsvg').classList.toggle('header1__boorgsvgnone')
    document.querySelector('#header1__boorg').classList.toggle('header1__boorg_none')
    document.querySelector('#voiti').classList.toggle('voiti_active')
  })
  document.querySelector('#menu__btnclose').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('menuactive')
    document.querySelector('#header1__boorgsvg').classList.add('header1__boorgsvgnone')
    document.querySelector('#header1__boorg').classList.add('header1__boorg_none')
    document.querySelector('#body').classList.add('body')
  })
  document.querySelector('.header1__list').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('menuactive')
    document.querySelector('#body').classList.add('body')
    document.querySelector('#header1__boorgsvg').classList.add('header1__boorgsvgnone')
    document.querySelector('#header1__boorg').classList.add('header1__boorg_none')
  })

  document.querySelector('#header1__poisk').addEventListener('click', function () {
    document.querySelector('#header1__form').classList.toggle('header1__form_active')
    document.querySelector('#header1__poisk').classList.toggle('header1__poisk_active')
  })
  document.querySelector('#header1__submit').addEventListener('click', function () {
    document.querySelector('#header1__form').classList.toggle('header1__form_active')
    document.querySelector('#header1__poisk').classList.toggle('header1__poisk_active')
  })

  // это на 768px

  document.querySelector('#header1__poisk').addEventListener('click', function () {
    document.querySelector('#header1__picture').classList.toggle('header1__picture_active')
    document.querySelector('#header1__boorg').classList.toggle('header1__boorg_none768')

  })

  document.querySelector('#header1__submit').addEventListener('click', function () {
    document.querySelector('#header1__picture').classList.add('header1__picture_active')
    document.querySelector('#header1__boorg').classList.add('header1__boorg_none768')
  })

  document.querySelector('.myswiper-wrapper').addEventListener('click', function () {
    document.querySelector('#body').classList.toggle('body')
  })
  document.querySelector('.benefits__close').addEventListener('click', function () {
    document.querySelector('#body').classList.add('body')
  })

})






let swiperSlides = document.querySelector(".benefits").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".benefits__modal");
let modalBtn = modal.querySelector(".benefits__close");
swiperSlides.forEach(el => {
  el.addEventListener("click", function () {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    animation(modal, "modal-active", "play");
    modal.querySelector("img").setAttribute("src", link);
  })
})
modalBtn.addEventListener("click", function () {
  animation(modal, "modal-active", "reverse");
});

function animation(el, Class, flag) {
  if (flag === "play") {
    el.style.display = "flex";
    setTimeout(function () {
      el.classList.add(Class);
    }, 50)
  } else if (flag === "reverse") {
    el.classList.remove(Class);
    setTimeout(function () {
      el.style.display = "none";
    }, 700)
  }
}



    (() => {
      tippy('.proekt__tip', {
        theme: 'proekt__tipstyle',
        maxWidth: 263,
      });
    })()

