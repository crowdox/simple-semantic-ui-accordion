import Ember from 'ember';
// Relative path works since both survey and manage are in lib/...
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

  perform() {
    this.get('group').perform(this);
  }
});
