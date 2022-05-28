import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SessionService extends Service {
  @storageFor('logged-as') loggedAs;
  @service store;
  @tracked currentUser;

  get isUserLoggedIn() {
    return Boolean(this.loggedAs.get('id'));
  }

  async loginUser(login, password) {
    const users = await this.store.query('user', {
      filter: { username: login, password: password },
    });
    // const isUserExist = !!users.length; //parsuje na wartośc Boolean (podwójny !!)
    const isUserExist = Boolean(users.length); //parsuje na wartośc Boolean (podwójny !!)
    if (isUserExist) {
      const user = users.firstObject;
      this.loggedAs.set('id', user.id);
      window.location.href = '/';
    }
  }

  logoutUser() {
    this.loggedAs.set('id', null);
    window.location.href = '/login';
  }

  async setCurrentUser() {
    const userId = this.loggedAs.get('id');
    const user = await this.store.findRecord('user', userId);
    this.currentUser = user;
  }
}
