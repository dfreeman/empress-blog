import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  classNames: ["post-template"],

  model(params) {
    // strip any trailing / from the post path
    let id = params.id.replace(/\/$/, '');

    // load authors first for ember-data autopopulation
    return this.store.findAll('author').then(() => {
      return hash({
        post:  this.store.findRecord('content', id),
        posts: this.store.findAll('content'),
      });
    });
  },
});
