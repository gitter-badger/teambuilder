$(document).ready(function()
{
	var regUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;

	var teamMate = Backbone.Model.extend({
		defaults: {
			fullname: 'Johnny Cash',
			imgUrl: 'http://fc08.deviantart.net/fs47/i/2009/195/a/f/Cash_by_eldudarino25.jpg',
			prof: 'back-end'
		}
	
	});

	var teamMateView = Backbone.View.extend({
		tagName: 'div',
		template:_.template("<img src="<%= imgUrl %>" (<%= age %>) - <%= placeOfBirth %>")
	});


























	// Save click logic

	$('#save').on('click', function()
	{
		var name = $('#matename').val(),
			url = 	$('#url').val();

			

		var mate = new teamMate(
			{
				fullname: name,
				imgUrl: url
			});


	});





});



