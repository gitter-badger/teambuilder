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

					if (attrs.name.length < 4 || attrs.name.length > 30) {
						alert("Name you've entered is too short");
						$('#username').addClass('error');
						this.set('name', 'Johhny Cash');
					}

					if (!urlPattern.test(attrs.avatar_url)) {
						this.set('avatar_url', 'http://icons.iconarchive.com/icons/thvg/wood-folders/512/Glossy-User-icon.png');
						$('#url').addClass('error');
					}


		},

		isFrontend: function() {
			return this.get('team') == 'frontend';
		}

	});


})(jQuery);