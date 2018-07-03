import { guidFor } from '@ember/object/internals';
import { isBlank } from '@ember/utils';
import Component from '@ember/component';
// Relative path works since both survey and manage are in lib/...
import AccordionBaseMixin from '../mixins/ss-accordion-base';

export default Component.extend(AccordionBaseMixin, {
  tagName: '',
  group: null, // accordion group

  init() {
    this._super(...arguments);
    if (isBlank(this.get('name'))) {
      this.set('name', `accordion-${guidFor(this)}`);
    }
  },

  perform() {
    this.get('group').perform(this);
  }
});
