(function ($) {
	'use strict';


	var Member = Backbone.Model.extend({
		defaults: {
			name: '',
			avatar_url: 'http://',
			team: ''
		},
		
		initialize: function(){
						alert('Hello, mr Newby');

						this.on('change: name', function() {
						console.log('Name has been changed!')
					})
		}
	});


})(jQuery);
