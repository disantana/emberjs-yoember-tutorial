import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { match, not, gte } from '@ember/object/computed';

export default Controller.extend({
  message:'',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  emailAddress:'',
  maxLength: 280,

  actions: {
   saveInvitation() {
     alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
     this.set('responseMessage', 'Thank you! Your email was save. ');
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }
});
