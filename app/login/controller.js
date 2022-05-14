import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { storageFor } from '@ember-local-storage';

export default class LoginController extends Controller {
  @service store;
  @storageFor('logged-As') loggedAs;
  @tracked loginValue;
  @tracked passwordValue;

  @action
  onLoginChange(event) {
    this.loginValue = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.passwordValue = event.target.value;
  }

  @action
  async onSubmitChange(event) {
    event.preventDefault();

    console.log('On submit changed triggered');
    const users = await this.store.query('user', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });
    // const isUserExist = !!users.length; //parsuje na wartośc Boolean (podwójny !!)
    const isUserExist = Boolean(users.length); //parsuje na wartośc Boolean (podwójny !!)
    if (isUserExist) {
      const user = users.firstObject;
      this.loggedAs.set('id', user.id);
    }
  }
}
