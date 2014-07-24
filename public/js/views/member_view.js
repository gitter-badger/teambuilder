(function($) {
	'use strict';


	window.MemberView = Backbone.View.extend({

		template: _.template($('#member-template').html()),

		className: 'member-class',


		events: {
			"click .destroyButton-class": "remove",
			"click .nameBox-class": "editName",
			"blur .editName": "close",
			"keypress .editName": "updateOnEnter",
			"keyup .editName": "preventOnEsc"
		},

		initialize: function() {
			this.render();
		},


		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.$input = this.$('.editName');
		},

		remove: function() {
			this.model.destroy();
		},

		editName: function() {
			this.$el.addClass('editing');
			this.$input.focus();
		},

		close: function() {
			var newName = this.$input.val();
			if (!this.$el.hasClass('editing')) {
				return;
			}

			this.$('.nameBox-class').text(newName);
			this.model.save({name: newName});
			this.$el.removeClass('editing');
		},

		updateOnEnter: function(e) {
			var KEY_ENTER = 13;
			if (e.which == KEY_ENTER) {
				this.close();
			}
		},

		preventOnEsc: function(e) {
			var KEY_ESC = 27;
			if (e.which == KEY_ESC) {
				this.$el.removeClass('editing');
				this.$input.val(this.model.get('name'));
			}
		}

	});

})(jQuery);