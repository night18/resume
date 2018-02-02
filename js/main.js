// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#skill").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Letter Animate
    ======================================*/

    $('.ml4 .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: true})
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-1").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-1 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4 .letters-1, .ml4 .line',
      opacity: 0,
      easing: "easeOutExpo",
    })
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-2").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-2 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4 .letters-2, .ml4 .line',
      opacity: 0,
      easing: "easeOutExpo",
    })
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-3").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-3 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4 .letters-3, .ml4 .line',
      opacity: 0,
      easing: "easeOutExpo",
    })
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-4").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-4 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4 .letters-4, .ml4 .line',
      opacity: 0,
      easing: "easeOutExpo",
    })
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-5").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-5 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4 .letters-5, .ml4 .line',
      opacity: 0,
      easing: "easeOutExpo",
    })
    .add({
      targets: '.ml4 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml4 .line',
      translateX: [0,$(".ml4 .letters-6").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml4 .letters-6 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    })
    .add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      easing: "easeOutExpo",
      delay: 500
    });

    anime.timeline({loop: true})
    .add({
      targets: '.button-container .fa-angle-down',
      translateY:[-15,0],
      duration:600
    })
    .add({
      targets: '.button-container .fa-angle-down',
      translateY:[0,-15],
      duration:600
    });


    // var ml4 = {};
    // ml4.opacityIn = [0,1];
    // ml4.scaleIn = [0.2, 1];
    // ml4.scaleOut = 3;
    // ml4.durationIn = 800;
    // ml4.durationOut = 600;
    // ml4.delay = 500;

    // anime.timeline({loop: true})
    // .add({
    //   targets: '.ml4 .letters-1',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-1',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4 .letters-2',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-2',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4 .letters-3',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-3',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4 .letters-4',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-4',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4',
    //   opacity: 0,
    //   duration: 500,
    //   delay: 500
    // });

}());


}
main();