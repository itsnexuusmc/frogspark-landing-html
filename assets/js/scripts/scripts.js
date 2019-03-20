(function($, root, undefined) {
	 $(function() {

		$(document).ready(function() {

			// Page transition
			function pageTransition() {
				$(document).ready(function() {
		            setTimeout(function(){ 
		            	// Remove the page transition class
		                $('body').removeClass('do-page-transition');
		            }, 125);
		        });
			}

			// Trigger the function
			pageTransition();
			

			// Set the hero to 100% of the height minus the header
			function calculateHeroHeight() {
				var windowHeight = $(window).outerHeight();

				var headerHeight = $('.header').outerHeight();

				var actualHeight = windowHeight - headerHeight;

				$('.hero').css('height', actualHeight + 'px');
			}

			// Trigger the function
			calculateHeroHeight();

			// Re-calculate the height on window resize
			$(window).resize(function() {
				calculateHeroHeight();
			});

		});

	})
})(jQuery, this);