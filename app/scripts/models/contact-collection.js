var Contact = require('models/contact');

var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/pnlist"
});

module.exports = ContactsCollection;
