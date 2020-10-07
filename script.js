$('.toggle-button').click(function() {
	$('.toggle-nav').addClass('open-nav');
});

$('.toggle-close').click(function() {
	$('.toggle-nav').removeClass('open-nav');
});

$('.nav-link').click(function() {
	$('.toggle-nav').removeClass('open-nav');
});

$(window).on('load', function() {
	$('.loader').fadeOut('slow');
});