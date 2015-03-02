$(document).ready(function(){
	
$('a').on('click', function(){
	var $this = $(this);
	var $img = $('img');
	var tipAnimacije = $this.data('animate');

	if(tipAnimacije == "no") {
		$img.hide();
		pojavise();
	} else if(tipAnimacije == "fade") {
		$img.fadeOut(400, pojavise);
	} else {
		$img.slideUp(400, pojavise);
	}

	function pojavise() {
		var imeSlike = $this.data('slika');
		var putanja = "images/" + imeSlike ;
		$img.attr('src', putanja)

		if(tipAnimacije == "no") {
			$img.show();
		} else if(tipAnimacije == "fade") {
			$img.fadeIn();
		} else {
			$img.slideDown();
		}
	}
});


$('img').on('click', function(){
	alert(
		$('.over').text('')
		);
	$('.over').slideDown();
	$('.over').html('<h1>Bla bla truc</h1>');

});

$('.over').on('click', function(){
	$(this).slideUp();
})

});


