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
			"click #username": "removeErrorName",
			"click #url": "removeErrorUrl"
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


			member.save(null, {
				success: function(model) {
					Backbone.history.navigate('/#/', {
						trigger: true
					});
				}
			});


		},

		createOnEnter: function(e) {
			var ENTER_KEY = 13;
			if (e.which === ENTER_KEY) {
				this.create();
			}
		},

		removeErrorName: function () {
			var errorValue = $('#username').val();

			$('#username').removeClass('error');

			$('#username').on('blur', function()
			{
				var value = $('#username').val();

				if ( value == errorValue || value.length < 4 || value.length > 30) {
					$('#username').addClass('error');
				} else {
					$('#username').addClass('correct');
				}
			});
		},

		removeErrorUrl: function () {
			$('#url').removeClass('error');
		}


	});

})(jQuery);