import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['title'],
  classNameBindings: ['accordion.isActive:active'],

  click(event) {
    this.get('accordion').toggle();
  }
});
