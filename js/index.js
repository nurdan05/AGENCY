$('.slider__wrapper').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1 ,
});
$('.features__wrapper').slick({
    dots: true,
    arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });
  $('.clients__wrapper').slick({
    dots: true,
    arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });

let burger = document.querySelector('.burger__menu');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});
