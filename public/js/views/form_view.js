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
			"click #saveButton": "create",
			"keypress input": "createOnEnter"
		},


		create: function() {
			var name = $('#username').val(),
				url = $('#url').val(),
				team = $("input:radio[checked]").val();


			var member = new window.Member({
				'name': name,
				'avatar_url': url,
				'team': team
			});



			$('input').removeClass('error');
			$('input').removeClass('correct');

			if (member.isValid()) {
				member.save(null, {
					success: function(model) {
						Backbone.history.navigate('/#/', {
							trigger: true
						});
					}
				});

			} else {
					$('.error-container').text(member.validationError);
					$('.error-container').animate({opacity: 1}, 200);
					$('.error-container').delay(1200).animate({opacity: 0}, 600);
			}



		},

		createOnEnter: function(e) {
			var ENTER_KEY = 13;
			if (e.which === ENTER_KEY) {
				this.create();
			}
		}

	});

})(jQuery);