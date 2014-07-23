(function ($) {
	'use strict';


	window.MembersView = Backbone.View.extend({

		template: _.template($('#members-template').html()),

		initialize: function() {		

			window.m = this;

			this.collection.on('remove', this.renderMembersList, this);

			this.render();
		},


		render: function() {
			var self = this;

			this.$el.html(this.template());

			$('#container').append(this.template());

			this.renderMembersList();

			$('#backButton').hide();
			$('#addButton').show();
			
		},

		renderMembersList: function() {
			this.$el.find('#members-region').html('');
			var self = this;
			_.each(this.collection.models, function(member, i) {
				self.renderMember(member);
			})
		},

		renderMember: function(member) {
			var memberView = new window.MemberView({model: member});
			memberView.render();
            this.$el.find('#members-region').append(memberView.$el);
		}


	});

})(jQuery);