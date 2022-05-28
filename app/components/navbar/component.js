import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Navbarcomponent extends Component {
  @service session;

  @action
  onLogout() {
    this.session.logoutUser();
  }
}
