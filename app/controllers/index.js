import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  // PROPERTIES OF VIEW
  headerMessage: 'Coming Soon',

  emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),


  actions: {
    saveInvitation() {
       var _that = this;
       var email = this.get('emailAddress');
       var newInvitation = this.store.createRecord('invitation', {
             email: email
        });

       newInvitation.save().then(function(response) {
          _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
          _that.set('emailAddress', '');
       });
   }
 }


});
