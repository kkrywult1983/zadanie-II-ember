import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
export default class ApplicationRoute extends Route {
  @storageFor('user') user;
  beforeModel() {
    console.log(this.user.get('username'));
    this.user.set('username', 'Kamillo');
    console.log(this.user.get('username'));
  }
}
