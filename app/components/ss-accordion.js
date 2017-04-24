import Ember from 'ember';

export default Ember.Component.extend({
  // If we don't have a group, then default this to ui accordion
  classNameBindings: ['group::ui', 'group::accordion'],
  group: null, // accordion group

  accordionTitleName: 'ss-accordion-title',
  accordionContentName: 'ss-accordion-content',

  duration: 500,
  transitionMode: 'fade',
  _isActive: false,

  name: Ember.computed.readOnly('elementId'),

  init() {
    this._super(...arguments);
    if (this.get('isOpen')) {
      this.set('_isActive', true);
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get('isOpen') === this.get('_isActive')) {
      return;
    }

    this.toggle();
  },

  toggle() {
    this._doToggle(this.get('name'));
  },

  // overwritten by group
  _doToggle() {
    this.toggleProperty('_isActive');
  }
});
