(function($) {
	'use strict';


	window.FormView = Backbone.View.extend({

		template: _.template($('#form-template').html()),

		initialize: function() {
			this.render();
			// $(document).keypress(function (e) {
 		// 		var key = e.which;
		 // 		if(key == 13)  {
  	// 				console.log('Saved');
  	// 			}
			// }); 

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
			"keypress input": "createOnEnter",
			"click #username": "validateName",
			"click #url": "validateUrl"
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
				alert(member.validationError);
			}



		},

		createOnEnter: function(e) {
			var ENTER_KEY = 13;
			if (e.which === ENTER_KEY) {
				this.create();
			}
		},

		validateName: function (e) {

			var target = $(e.currentTarget);

			target.removeClass('error');

			target.on('blur', function()
			{
				var value = target.val();

				if ( value.length < 4 || value.length > 30) {
					target.addClass('error');
				} else {
					target.addClass('correct');
					}
			});
		},

		validateUrl: function() {

			target.removeClass('error');

			if (urlPattern.test(attrs.avatar_url)) {
					$('#url').addClass('correct');
			} else {
					target.addClass('error');
			}
		}

	});

})(jQuery);