(function($) {
	'use strict';


	window.MembersView = Backbone.View.extend({

		template: _.template($('#members-template').html()),

		tagName: 'section',

		className: 'membersCollection-class',

		events: {
			"click .straight-sort": "sort",
			"click .reverse-sort": "sortBy",
		},

		initialize: function(options) {
			this.team = options.team;
			this.collection.on('remove', this.renderMembersList, this);
			this.render();
		},


		render: function() {
			var self = this;

			this.$el.html(this.template({team: this.team}));
			$('#' + this.team).append(this.$el);

			this.$list = this.$('.members-region')
			
			this.renderMembersList();

			$('#backButton').hide();
			$('#addButton').show();

		},

		renderMembersList: function() {
			this.$el.find('.members-region').html('');
			var self = this;
			_.each(this.collection.models, function(member, i) {
				self.renderMember(member);
			});
		},

		renderMember: function(member) {
			var memberView = new window.MemberView({
				model: member
			});

			this.$list.append(memberView.$el);
		},

		sort: function() {
			console.log('Sort');
			this.collection.comparator = 'name';
			this.collection.sort();
			this.render();
		},

		sortBy: function() {
			this.collection.comparator = 'name';
			this.collection.sort();
			this.render();
		}
	});

})(jQuery);