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

// фикс меню при скролле и подсветка текущего пункта
$(document).ready(function() {
	let nav = $('.nav-container');
	let nav_bg = $('.nav-scroll-bg');
	let height = nav.outerHeight();
	let sections = $('section');
	let header = $('#main')

	sections.push(header[0])
 
	$(window).scroll(function () {
		// подсветка активного пункта меню при скролле
		let cur_pos = $(this).scrollTop();
		
	  sections.each(function() {
	    let top = $(this).offset().top - height;
			let bottom = top + $(this).outerHeight();
			
	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('a').removeClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });

		// фикс меню при скролле
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