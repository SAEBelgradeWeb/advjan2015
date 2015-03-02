$(document).ready(function(){
	//nacin 1
	$('.img_container').on('click', function(){
		var $text = $('.img_text'), 
			top =  $text.css('top');

		var vrednost = (top == "0px") ? "220px" : "0";
		$text.css('top', vrednost);
	});
	
	//nacin 2
	var prekidac;
	$('.img_container').on('click', function(){
		prekidac = (prekidac) ? false : true;

		var $text = $('.img_text');

		(prekidac) ? 
				$text.css('top', '0px') 
				: $text.css('top', '220px');

	});

	//nacin 3
	$('.img_container').on('click', function(){
		var $text = $('.img_text');
		if ($text.hasClass('top220')) {
			$text.addClass('top0').removeClass("top220");
		} else {
			$text.addClass('top220').removeClass("top0");
		}
		


	});

});



