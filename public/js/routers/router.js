(function($) {
	'use strict';


	window.Router = Backbone.Router.extend({
		routes: {
			"": "index",
			"new": "new"
		},

		index: function() {
			var members = new window.Members();

					$('#container').html('');
					$('#container').append('<div id="frontend" class="team-container"></div>' + '<div id="backend" class="team-container"></div>');


			members.fetch({
				success: function(collection) {



					var frontendMembers = collection.filterByType('frontend');

					var backendMembers = collection.filterByType('backend');

					var frontendMembersView = new window.MembersView({
							collection: frontendMembers,
							team: 'frontend'
						}),
						backendMembersView = new window.MembersView({
							collection: backendMembers,
							team: 'backend'
						});
				}
			});
		},

		new: function() {
			var formView = new window.FormView();
			$('#container').html(formView.$el);
		},
	});


})(jQuery);