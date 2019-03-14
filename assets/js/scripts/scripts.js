$(document).ready(function() {
	// $('.fancy_title').lettering();
	var windowHeight = $(window).outerHeight();

	var headerHeight = $('.header').outerHeight();

	var actualHeight = windowHeight - headerHeight;

	console.log(actualHeight);

	$('.hero').css('height', actualHeight + 'px');
});