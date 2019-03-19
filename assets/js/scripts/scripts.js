(function($, root, undefined) {
	 $(function() {
		$(document).ready(function() {
			function pageTransition() {
				$(document).ready(function() {
		            setTimeout(function(){ 
		                $('body').removeClass('do-page-transition');
		            }, 100);
		        });
			}

			pageTransition();
			

			function calculateHeroHeight() {
				var windowHeight = $(window).outerHeight();

				var headerHeight = $('.header').outerHeight();

				var actualHeight = windowHeight - headerHeight;

				$('.hero').css('height', actualHeight + 'px');
			}

			calculateHeroHeight();

			$(window).resize(function() {
				calculateHeroHeight();
			});

		});

	})
})(jQuery, this);