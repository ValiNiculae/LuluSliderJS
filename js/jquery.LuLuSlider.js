(function ($) {
	"use strict";

	$.fn.LuluSlider = function (options) {

		var settings    = $.extend( {
            navArrow : '.arrow',
//            navButtonsDiv  : '.arrow'
        }, options);


		var methods = {
			slideContainer: '',
			slideWidth: 0,
			currentSlide: 0,
			totalSlides: 0,

			init: function (slider) {
				var _self = this;
				_self.slideContainer = slider;
				_self.slideWidth = $(_self.slideContainer).find('ul li').eq(0).outerWidth(true);
				_self.totalSlides = $(_self.slideContainer).find('ul li').length;

				console.log(_self.totalSlides);

				$(_self.slideContainer).find( settings.navArrow ).click(function (e) {
					e.preventDefault();

					if ($(this).hasClass('left')) {
						_self.nextSlide();
					}else{
						_self.prevSlide();
					}
				});
			},
			nextSlide: function () {
				var _self = this;

				if( _self.currentSlide + 1 == _self.totalSlides){
					_self.currentSlide = 0;
				}else{
					_self.currentSlide++;
				}

				$(_self.slideContainer).find('ul').animate({
					marginLeft: -_self.slideWidth * _self.currentSlide
				});
			},
			prevSlide: function () {
				var _self = this;
				if( _self.currentSlide - 1 < 0 ){
					_self.currentSlide = _self.totalSlides;
				}else{
					_self.currentSlide--;
				}

				$(_self.slideContainer).find('ul').animate({
					marginLeft: -_self.slideWidth * _self.currentSlide
				});
			}
		};


		return this.each(function() {

			methods.init(this);

			return this; // Let's not break the jQuery chain
		});
	}
})(jQuery)
