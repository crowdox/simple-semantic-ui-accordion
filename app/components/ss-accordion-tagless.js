import Ember from 'ember';
import AccordionBaseMixin from '../mixins/ss-accordion-base';

export default Ember.Component.extend(AccordionBaseMixin, {
  tagName: '',
  group: null, // accordion group

  init() {
    this._super(...arguments);
    if (Ember.isBlank(this.get('name'))) {
      this.set('name', `accordion-${Ember.guidFor(this)}`);
    }
  },

  isActive: Ember.computed('group.activeItems.[]', function() {
    return this.get('group').get('activeItems').isAny('name', this.get('name'));
  }),

  toggle() {
    this.get('group').toggle(this.get('name'));
  }
});
