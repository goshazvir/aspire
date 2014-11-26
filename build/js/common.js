head.ready(function() {

	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).addClass('is-selected').siblings().removeClass('is-selected');
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
	 });
	};
	select();

	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

	$('.js-flexslider').flexslider({
		namespace: "gallery-",
		smoothHeight: true,
		animation: "fade",
		selector: ".js-flexslider-in > .gallery-item",
		directionNav: false,
		// controlsContainer: ".slider",
		useCSS: false,
		controlNav: false,
		slideshow: false
	});
	$('.gallery-prev').on('click', function(){
	    $('.js-flexslider').flexslider('prev')
	    return false;
	});

	$('.gallery-next').on('click', function(){
	    $('.js-flexslider').flexslider('next')
	    return false;
	});


});
