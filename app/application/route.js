import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const user1 = {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      photoURL:
        'https://ocdn.eu/images/pulscms/MTA7MDA_/83c66d0a9510a4ebc73f18539f0c88b1.jpeg',
      isAdmin: true,
    };
    const user2 = {
      id: 2,
      username: 'user',
      password: 'user',
      email: 'user@user.com',
      photoURL:
        'https://i2.wp.com/www.pies.pl/wp-content/uploads/2019/02/pies-search.png',
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);
    await user1Model.save();
    await user2Model.save();

    const post1 = {
      id: 1,
      title: 'Testowy',
      body: 'zawartosc testowa1',
      owner: user1Model,
    };
    const post2 = {
      id: 2,
      title: 'Testowy2',
      body: 'zawartosc testowa2',
      owner: user1Model,
    };
    const post3 = {
      id: 3,
      title: 'Testowy3',
      body: 'zawartosc testowa3',
      owner: user2Model,
    };

    const post1Model = this.store.createRecord('post', post1);
    const post2Model = this.store.createRecord('post', post2);
    const post3Model = this.store.createRecord('post', post3);

    await post1Model.save();
    await post2Model.save();
    await post3Model.save();
  }
}
