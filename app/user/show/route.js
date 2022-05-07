import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserShowRoute extends Route {
  @service store;

  model(params) {
    const user = this.store.findRecord('user', params.id);
    return user;
  }
}
