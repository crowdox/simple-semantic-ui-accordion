import Ember from 'ember';

export default Ember.Mixin.create({
  accordionTitleName: 'ss-accordion-title',
  accordionContentName: 'ss-accordion-content',

  duration: Ember.computed('group', function() {
    let group = this.get('group');
    if (Ember.isPresent(group)) {
      return group.get('duration');
    }

    return 500;
  }),

  transitionMode: Ember.computed('group', function() {
    let group = this.get('group');
    if (Ember.isPresent(group)) {
      return group.get('transitionMode');
    }

    return 'fade';
  }),

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get('isOpen') === this.get('isActive')) {
      return;
    }

    this.toggle();
  }
});
