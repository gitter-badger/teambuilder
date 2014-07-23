(function($) {
	'use strict';


	window.Member = Backbone.Model.extend({

		urlRoot: '/members',

		defaults: {
			name: '',
			avatar_url: 'http://',
			team: ''
		}

	});


})(jQuery);