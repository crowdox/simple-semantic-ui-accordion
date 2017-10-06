import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['title'],
  classNameBindings: ['accordion.isActive:active'],

  onclick: function() {},

  init() {
    this._super(...arguments);
    this.get('accordion').registerTitle(this);
  },

  click(event) {
    this.get('accordion').perform();
    this.get('onclick')();
  }
});
