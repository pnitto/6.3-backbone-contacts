var ContactCollection = require('models/contact-collection');

var ContactListView = Backbone.View.extend({
  tagname: 'ul',
  className: 'contact-list',
  template: JST['contacts/list'],

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },
  events: {
    'add': 'contactsAdd'
  },
  contactsAdd: function(){
    $('#container').html(this.render().el);
  },
});

module.exports = ContactListView;
