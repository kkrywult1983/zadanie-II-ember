import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';
import { action } from '@ember/object';

export default class RegisterRoute extends Route {
  @storageFor('logged-as') loggedAs;
  @service store;
  @service router;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.transitionTo('home');
      return;
    }
  }
  model() {
    return this.store.createRecord('user');
  }

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.get('model').destroyRecord;
      //   console.log(id);
      //   this.store.unloadRecord('user', id);
    }
  }

  //   @action
  //   willTransition() {
  //     this.store.unload('user');
}
