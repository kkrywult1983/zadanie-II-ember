import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PostsListItemComponent extends Component {
  // mojaZmienna = 'Kamil';
  @service session;

  get isAllreadyLikedByCurrentUser() {
    const { currentUser } = this.session;
    const { post } = this.args;

    const LikeModel = currentUser.likes.find((like) => {
      return like.post.get('id') === post.id;
    });
    const isLikeExists = Boolean(LikeModel);
    return isLikeExists;
  }
}
