$(function toggleWorkHistory(){
    $('#expand-past-work').click(function(ev){
      $('#past-work-hidden').toggleClass('show');
      $('#expand-past-work').toggleClass('seeMore');
    });
});


$(document).ready(function(){
  $('.project-gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
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
  });
});
