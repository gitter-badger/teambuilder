$(document).ready(function() {


	heightInit();
	$(window).resize(function() {
		heightInit();
	});



	new Router();
	Backbone.history.start();


	function heightInit() {
		var height = $(window).height();
		$('#container').css('min-height', height - 190);
	}




});