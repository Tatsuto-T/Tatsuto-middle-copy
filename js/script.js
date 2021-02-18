var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	loopedSlides:4,
    centeredSlides:true,
	slidesPerView: 2,
	spaceBetween :0,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		900: {
			loop: true,
			loopedSlides:4,
			centeredSlides:true,
			slidesPerView:3.5,
			spaceBetween :0,
			autoplay: {
				delay: 5000,
			},
		},
	}
});

AOS.init();

$(function() {
	$(".questions-content").click(function() {
		var $answer = $(this).find(".answer")
		if($answer.hasClass("open")){
			$answer.removeClass("open");
			$answer.slideUp();
			$(this).find("span").text("+")
		} else {
			$answer.addClass("open");
			$answer.slideDown();
			$(this).find("span").text("-")
		}
	});

});

var scroll = new SmoothScroll('a[href*="#"]', {
	header: 'header'
});

$(document).ready(function () {

	const $submitBtn = $('#js-submit')
	$('#form input,#form textarea').on('change', function () {
	if (
		$('#form input[type="text"]').val() !== "" &&
		$('#form input[type="email"]').val() !== "" &&
		$('#form input[type="checkbox"]').val() !== "" &&
		$('#form #privacyCheck').prop('checked') === true
	) {
		$submitBtn.prop('disabled', false);

	} else {
		$submitBtn.prop('disabled', true);
	}
	});
});

$('.btn-trigger').on('click', function(){
    $(this).toggleClass('active');
	// $("body").css("bacground","red");
    if ($(this).hasClass('active')){
		$(".bglayer").addClass("open");
		$(".nav").addClass("nav-open");
    } else {
		$(".bglayer").removeClass("open");
		$(".nav").removeClass("nav-open");
    }
    return false;
});

$(".nav-el").on('click',function(){
	$(".bglayer").removeClass("open");
	$(".nav-open").removeClass("nav-open");
	$("#btn").removeClass("active");
});