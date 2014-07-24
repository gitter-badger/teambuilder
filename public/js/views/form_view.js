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
			'keypress input': 'createOnEnter'
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
		}


	});

})(jQuery);