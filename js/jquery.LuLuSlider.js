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
			canChangeSlide: true,

			init: function (slider) {
				var _self = this;
				_self.slideContainer = slider;
				_self.slideWidth = $(_self.slideContainer).find('ul li').eq(0).outerWidth(true);
				_self.totalSlides = $(_self.slideContainer).find('ul li').length - 1; // 0 index

				$(_self.slideContainer).find( settings.navArrow ).click(function (e) {
					e.preventDefault();

					if(_self.canChangeSlide == true){
						_self.changeSlide( $(this).data('direction') );
						_self.canChangeSlide = false;
					}
				});
			},

			changeSlide: function (direction) {
				var _self = this;
				if( direction == 'left'){
					_self.currentSlide = (_self.currentSlide - 1 < 0 ) ? _self.totalSlides : _self.currentSlide - 1;
				}else{
					_self.currentSlide = (_self.currentSlide + 1 > _self.totalSlides ) ? 0 : _self.currentSlide + 1;
				}

				$(_self.slideContainer).find('ul').animate({
					marginLeft: -_self.slideWidth * _self.currentSlide
				},function () {
					_self.canChangeSlide = true;
				});
			},

		};


		return this.each(function() {

			methods.init(this);

			return this; // Let's not break the jQuery chain
		});
	}
})(jQuery)
