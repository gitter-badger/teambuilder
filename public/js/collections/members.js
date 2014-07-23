(function ($) {
	'use strict';

	window.Members = Backbone.Collection.extend({

		url: '/members',


		model: Member
	})

})(jQuery);