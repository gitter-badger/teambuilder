(function ($) {
	'use strict';


	window.FormView = Backbone.View.extend({

		template: _.template($('#form-template').html()),

		initialize: function() {
			this.render();
		},

		render: function() {		
			this.$el.html(this.template());
			$('#addButton').hide();
			$('#backButton').show();
		},

		events: {
			"click #saveButton" : "create"
		},

		create: function() {
			var name = $('#username').val(),
			    url = $('#url').val();



			window.member = new window.Member({'name': name, 'avatar_url': url});
			member.save(null, {
				success: function(model) {
					Backbone.history.navigate('/#/', { trigger: true });
				},

				error: function() {
					alert('Learn backbone');
				}
			});


		},



	});

})(jQuery);