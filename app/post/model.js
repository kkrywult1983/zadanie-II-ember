import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string', { defaultValue: 'Unknown user' }) owner;
  @attr('string') body;
  @attr('string') title;
  @attr('boolean', { defaultValue: false }) isDeleted;
}
