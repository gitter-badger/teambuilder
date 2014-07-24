(function ($) {
	'use strict';

	window.Members = Backbone.Collection.extend({

		url: '/members',


		model: Member,

		filterByType: function(type) {
			return new window.Members(this.where({team: type}));
		}
	})

})(jQuery);