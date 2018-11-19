// Слайдер
$('.main-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnFocus: false
});

// "Липкая" шапка 
$(window).scroll(function () {
	if ($(this).scrollTop() > 150) {
		$('.middle-header').addClass("sticky");
	} else {
		$('.middle-header').removeClass("sticky");
	}
});

// Якоря в главном меню
$(document).ready(function () {
	$("#main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

// Кнопка "Наверх" в подвале
$(document).ready(function () {
	$("#footer-logo").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 2500);
	});
});