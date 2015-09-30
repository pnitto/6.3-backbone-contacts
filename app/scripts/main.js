var ContactsCollection = require('models/contact-collection');
var CreateContact = require('views/contacts/create');
var listContactView = require('views/contacts/list');

window.App = {};

$(document).ready(function(){

    App.contacts = new ContactsCollection();

    window.createContactView = new CreateContact();
    window.listContactView = new listContactView();

    $('.submit-btn').on('click', function(){
      console.log(App.contacts.fetch());
    });

  $('#container').append(createContactView.render().el);
  $('.list-contact').append(listContactView.render().el);



});
