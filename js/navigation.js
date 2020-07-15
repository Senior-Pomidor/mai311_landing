// плавный скролл
$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top - 15
		}, 500);
	});
});

// фикс меню при скролле
$(document).ready(function() {
	let nav = $('.nav-container');
	let nav_bg = $('.nav-scroll-bg');
	let height = $(".nav-container").height()
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			nav.addClass("nav-container--fixed");
			nav_bg.addClass("nav-scroll-bg--visible");
			nav_bg.height(height);
		} else {
			nav.removeClass("nav-container--fixed");
			nav_bg.removeClass("nav-scroll-bg--visible");
		}
	});
});