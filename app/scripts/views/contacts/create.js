var CreateContact = Backbone.View.extend({
  tagName: 'form',
  className: 'contact-form',
  template: JST['contacts/create'],
  events: {
    'submit':'createContact'
  },
  render: function(){
    this.$el.html(this.template());
    console.log(this);
    return this;
  },
  createContact: function(e){
    e.preventDefault();
    console.log(this);
    App.contacts.create(this.serialize());
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
module.exports = CreateContact;
