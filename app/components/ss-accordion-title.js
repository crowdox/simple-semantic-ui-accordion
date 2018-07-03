import Component from '@ember/component';

export default Component.extend({
  classNames: ['title'],
  classNameBindings: ['accordion.isActive:active'],

  onclick: function() {},

  init() {
    this._super(...arguments);
    this.get('accordion').registerTitle(this);
  },

  click() {
    this.get('accordion').perform();
    this.get('onclick')();
  }
});
