(function($) {
	'use strict';


	window.MembersView = Backbone.View.extend({

		template: _.template($('#members-template').html()),

		initialize: function(options) {
			this.team = options.team;
			this.collection.on('remove', this.renderMembersList, this);
			this.render();
		},


		render: function() {
			var self = this;

			this.$el.html(this.template({team: this.team}));

			this.renderMembersList();

            $('#' + this.team).append(this.template());

			$('#backButton').hide();
			$('#addButton').show();

		},

		renderMembersList: function() {
			this.$el.find('.members-region').html('');
			var self = this;
			_.each(this.collection.models, function(member, i) {
				self.renderMember(member);
			})
		},

		renderMember: function(member) {
			var memberView = new window.MemberView({
				model: member
			});
			memberView.render();
			console.log('doing it for' + ' ' + member.attributes.name);
			this.$el.find('.members-region').append(memberView.$el);
		}


	});

})(jQuery);