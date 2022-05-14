import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class RegisterController extends Controller {
  @service store;
  @storageFor('logged-As') loggedAs;

  @action
  onLoginChange(event) {}

  @action
  onEmailChange(event) {}

  @action
  onPhotoURLChange(event) {}

  @action
  onPasswordChange(event) {}

  @action
  async onSubmit(event) {
    event.preventdefault();
  }
}
