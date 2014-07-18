(function ($) {
	'use strict';


	var MemberView = Backbone.View.extend({

		template: _.template($('#member-template').html()),

		events: {
			'click .destroyButton-class': 'clear'
		},

		initialize: function () {
			this.render(),
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		}



	});

})(jQuery);