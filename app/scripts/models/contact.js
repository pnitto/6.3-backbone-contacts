var Contact = Backbone.Model.extend({
  defaults: function(){
    return {
      email: "",
      name: "",
      phoneNumber: "",
      twitterUsername: "",
      linkedinUsername: "",
    };
  },
/*
  validate: {
    email: {
      required: true,
      pattern: 'email',
      msg: 'Please enter a valid email',
    },
    name: {
      required: true,
    },
    phoneNumber: {
      required: true,
    },
    twitterUsername: {
      required: false,
    },
    linkedinUsername: {
      required: false,
    }
  }
*/
});


module.exports = Contact;
