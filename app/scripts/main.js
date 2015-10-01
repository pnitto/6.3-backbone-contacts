var ContactsCollection = require('models/contact-collection');
var CreateContact = require('views/contacts/create');
var ContactListView = require('views/contacts/list');

window.App = {};

$(document).ready(function(){

    App.contacts = new ContactsCollection();

    window.createContactView = new CreateContact();

    $('.submit-btn').on('click', function(){
      //console.log(App.contacts.fetch());
    });

  $('#container').append(createContactView.render().el);

  window.contactList = new ContactListView({
    collection: App.contacts
  });
  contactList.collection.fetch();
  contactList.collection.on('sync', function(event){
    $('#container').append(contactList.render().el);
  });

});
