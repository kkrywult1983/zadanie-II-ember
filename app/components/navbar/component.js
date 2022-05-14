import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class Navbarcomponent extends Component {
  @storageFor('logged-As') loggedAs;
  @action
  onLogout() {
    console.log('logout');
    this.loggedAs.set('id', null);
  }
}
