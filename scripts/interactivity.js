$(function toggleWorkHistory(){
    $('#expand-past-work').click(function(ev){
      $('#past-work-hidden').toggleClass('show');
      $('#expand-past-work').toggleClass('seeMore');
    });
});