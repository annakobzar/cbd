'use strict';

(function($){
	$(document).ready(function() {
		// Code

		// Fixed Menu
		let sections = {
			header: $('#header').offset().top,
			what: $('#what').offset().top,
			products: $('#products').offset().top,
			faqs: $('#faqs').offset().top,
			contact: $('#contact').offset().top,
			};
		
		$(window).scroll(() => {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				position = '';

			if (scrTop < sections.products) {
				position = 'header';
			} else if (scrTop >= sections.products && scrTop < sections.faqs) {
				position = 'products';
			} else if (scrTop >= sections.faqs && scrTop < sections.contact) {
				position = 'faqs';
			} else {
				position = 'contact';
			}

			$('.menu__link').removeClass('menu__link--active');
			$('.menu').find(`[href="#${position}"]`).addClass('menu__link--active');

			if (position === 'what' || position === 'products' || position === 'faqs' || position === 'contact' ) {
				$('.navigation').addClass('navigation--scrolled');
			} else {
				$('.navigation').removeClass('navigation--scrolled');
			}
		});

		// Slick Slaider
		$('.slider').slick({
			dots: true,
			arrows: true,
			prevArrow: '<div class="slider__prev"> <i class="icon-arrow"></i> </div>',
			nextArrow: '<div class="slider__next"> <i class="icon-arrow"></i> </div>',
			appendArrows: $('.slider__arrows'),
			appendDots: $('.slider__dots'),
			slidesToShow: 3,
			slidesToScroll: 2,
			speed: 4000,
						// autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
			
			responsive: [
			  {
				breakpoint: 560,
				settings: {
				  slidesToShow: 1,
				  dots: false,
				  speed: 500,
				  swipe: true
				}
			  }
			]
		  });
		
	});
})(jQuery);
