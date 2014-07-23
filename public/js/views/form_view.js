(function($) {
	'use strict';


	window.FormView = Backbone.View.extend({

		template: _.template($('#form-template').html()),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			$('#addButton').hide(function() {
				$('#username').focus();
			});
			$('#backButton').show();
		},

		events: {
			"click #saveButton": "create"
		},

		create: function() {
			var name = $('#username').val(),
				url = $('#url').val();

			var member = new window.Member({
				'name': name,
				'avatar_url': url
			});

			if (member.isValid()) {

				member.save(null, {
					success: function(model) {
						Backbone.history.navigate('/#/', {
							trigger: true
						});
					},
					error: function() {
						alert('Learn backbone');
					}
				});
			} else {
				alert(this.model.validationError);
			}

		}


	});

})(jQuery);