$(document).ready(function(){
    
      $('#subtitle').css({'opacity':0}).animate({
          'opacity':1
        },{
            duration: 1200
        });
   
    //turn h1 to opaque before running animation    
    $('h1').css({'opacity':0}).animate({
            'opacity':1
          },{
              duration: 1
          });
     
    $('.h1Anime .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: false})
        .add({
          targets: '.h1Anime .letter',
          translateY: ["1.5em", 0],
          translateZ: 0,
          
          duration: 750,
          delay: function(el, i) {
            return 50 * i;
          }
        });
    });


//scroll effects    
let $name = $('#name-header');
    $name.waypoint(function(direction){
    if(direction === 'down'){
        $("#subtitle").fadeOut(400, function(){
        
        });     
        anime({
            targets: '.h1Anime',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
        })
    }
    },{
        offset: '30px'
    });

    $name.waypoint(function(direction){
    if(direction === 'up'){
        $("#subtitle").hide().fadeIn(2000, function(){
        
        });     
        anime({
            targets: '.h1Anime',
            opacity: 1,
            translateY: ["1.5em", 0],
            easing: 'easeInOutBack',
            duration: 1200,
            delay: function(el, i) {
            return 50 * i;
            }
        })
    }
    },{
        offset: '0'
    });
