import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  accordionTitleName: 'ss-accordion-title',
  accordionContentName: 'ss-accordion-content',

  isActive: false,
  // Only set externally
  isOpen: false,

  title: null,
  content: null,

  duration: computed('group.duration', function() {
    let group = this.get('group');
    if (isPresent(group)) {
      return group.get('duration');
    }

    return 500;
  }),

  transitionMode: computed('group.transitionMode', function() {
    let group = this.get('group');
    if (isPresent(group)) {
      return group.get('transitionMode');
    }

    return 'fade';
  }),

  didInsertElement() {
    this._super(...arguments);
    if (this.get('isOpen')) {
      this.perform();
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get('isOpen') === this.get('isActive')) {
      return;
    }

    this.perform();
  },

  // The method called from accordion and group
  toggle() {
    this.toggleProperty('isActive');
    this.get('content').toggle();
  },

  // Called on init
  registerTitle(title) {
    this.set('title', title);
  },

  registerContent(content) {
    this.set('content', content);
  }
});
