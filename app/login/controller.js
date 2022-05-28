import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service store;

  @tracked loginValue;
  @tracked passwordValue;
  @service session;

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
    const { loginValue, passwordValue } = this;
    await this.session.loginUser(loginValue, passwordValue);
  }
}
