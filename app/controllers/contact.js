import Controller from '@ember/controller';
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
     this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }
});
