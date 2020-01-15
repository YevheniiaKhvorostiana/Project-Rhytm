$('.js-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<button class="slider-arrow slider-arrow--prev"></button><div class="slider-left"></div></button>',
  nextArrow: '<button class="slider-arrow slider-arrow--next"></button><div class="slider-right"></div></button>'
});