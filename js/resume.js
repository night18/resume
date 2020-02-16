function main() {

(function () {
	'use strict';

	$('a.page-scroll').click(function() {
		let $main_content = $('#main-content')
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      console.log( target.offset().top)
      if (target.length) {
        $main_content.animate({
          scrollTop: target.offset().top - $main_content.position().top + $main_content.scrollTop() - 40
        }, 900);
        return false;
      }
    }
  });

	$(document).ready(function() {
		
		// // Preloader
		// $(window).on("load", function(){
			
		// 	if($('#preloader').length){
		// 		$('#preloader').delay(1000).fadeOut('slow', function () {
		// 			$(this).remove();
		// 		});
		// 	}
		// });

		// Navbar location
		let window_width = (window.innerWidth > 0) ? window.innerWidth : screen.Width;
		if($('#navbar').length > 0) {
				if(window_width <= 992) {
					$('#navbar').addClass('fixed-bottom')
					$('#navbar').removeClass('navbar-fixed-top')
				} else {
					if ($('#navbar').hasClass('fixed-bottom')) {
						$('#navbar').removeClass('fixed-bottom')
						$('#navbar').addClass('navbar-fixed-top')
					}   
				}
		}//Warning: it would not change when window size change



		// 	/*--/ Star Typed /--*/
		// if ($('.text-slider').length == 1) {
		// 	var typed_strings = $('.text-slider-items').text();
		// 	var typed = new Typed('.text-slider', {
		// 		strings: typed_strings.split(','),
		// 		typeSpeed: 80,
		// 		loop: true,
		// 		backDelay: 1100,
		// 		backSpeed: 30
		// 	});
		// }

	})

}());


}
main();