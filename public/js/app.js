$(document).ready(function() {




	var height = $(window).height();
	$('#container').css('min-height', height - 190);

	new Router();
	Backbone.history.start();


});