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


// подсветка активного пункта меню при скролле
// var sections = $('section'), nav = $('.nav-container'), nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
  
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
    
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
      
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });

// nav.find('a').on('click', function () {
//   var $el = $(this), id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });