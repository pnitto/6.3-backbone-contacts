var ListContact = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-contact',
  template: JST['contacts/list'],
  events: {
    'submit':'ListContact'
  },
  render: function(){
    this.$el.html(this.template());
    console.log(this);
    return this;
  },
  ListContact: function(e){
    e.preventDefault();
    console.log(this);
    App.contacts.on('sync', function(){
      App.contacts.fetch(this.serialize());
  });
},
  serialize: function(){
    var result = {};
    console.log(result);
    var input = this.$el.serializeArray();
    input.forEach(function(input){
        result[input.name] = input.value;
    });
    return result;
  }
});
module.exports = ListContact;
