(function ($) {
	'use strict';


	window.Member = Backbone.Model.extend({

		url: function() {
			return this.preparePath();
		},

		defaults: {
			name: '',
			avatar_url: 'http://',
			team: ''
		},

		preparePath: function() {
			if (this.isNew()) {
				return '/members'
			} else {
				return ['/members/', this.get('id')].join('');
			}
		}

	});


})(jQuery);
