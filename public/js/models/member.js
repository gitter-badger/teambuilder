(function($) {
	'use strict';

	

	window.Member = Backbone.Model.extend({

		urlRoot: '/members',

		defaults: {
			name: '',
			avatar_url: 'http://icons.iconarchive.com/icons/thvg/wood-folders/512/Glossy-User-icon.png',
			team: ''
		},

		validate: function(attrs, options) {
					var urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

					if (attrs.name.length < 3 || attrs.name.length > 30) {
						console.log("Name you've entered is too short");
						this.set('name', 'Johhny Cash');
						return false;
					}
					// if (urlPattern.test(attrs.avatar_url)) {
					// 	console.log("You've entered incorrect URL");
					// 	this.set('avatar_url', 'http://icons.iconarchive.com/icons/thvg/wood-folders/512/Glossy-User-icon.png');
					// }
		},

		isFrontend: function() {
			return this.get('team') == 'frontend';
		}

	});


})(jQuery);