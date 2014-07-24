(function($) {
	'use strict';


	window.MemberView = Backbone.View.extend({

		template: _.template($('#member-template').html()),

		className: 'member-class',


		events: {
			"click .destroyButton-class": "remove"
		},

		initialize: function() {
			this.render();
		},


		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		remove: function() {
			this.model.destroy();
		}



	});

})(jQuery);