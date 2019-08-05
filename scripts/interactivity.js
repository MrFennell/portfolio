//swiper gallery
$(document).ready(function(){
  $(".card").click(function(){
    let cardId = $(this).attr('id');
    let modalName = "modal-"+cardId;
    let modalGalleryId = "#"+modalName;
    let swiperContainerName = (modalName.replace("modal",".swiper-container"));
    // let swiperPaginationName = (modalName.replace("modal",".swiper-pagination"));
    
    $(modalName).modal("show");
    $(modalGalleryId).on('shown.bs.modal', function(){
    
    let mySwiper = new Swiper(swiperContainerName, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            initialSlide: 1,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
            },
            // pagination: {
            //   el: swiperPaginationName,
            // },
          });

      });
      
    });
});

//toggle work history
$(function toggleWorkHistory(){
    $('#expand-past-work').click(function(ev){
      $('#past-work-hidden').toggleClass('show');
      $('#expand-past-work').toggleClass('seeMore');
    });
});