(function ($) {
	'use strict';


	window.Router = Backbone.Router.extend({
		routes: {
			"":  "index",
			"new":  "new"
		},

		index: function() {
			var members = new window.Members();
			members.fetch({
				success: function(collection) {
					var membersView = new window.MembersView({collection: collection});
					$('#container').html(membersView.$el);
				}
			});
		},

		new: function() {	
			var formView = new window.FormView();
			$('#container').html(formView.$el);
		},
	});


})(jQuery);