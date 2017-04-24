import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['title'],

  collapsible: true,

  click(event) {
    this.get('accordion').toggle();
  }
});
