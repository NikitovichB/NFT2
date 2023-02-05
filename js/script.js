$('.main-photos-slide').slick({
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  prevArrow: '.main-photos-btn-left',
  nextArrow: '.main-photos-btn-right',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})