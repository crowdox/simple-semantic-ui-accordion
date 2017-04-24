import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'accordion'],
  accordionTitleName: 'ss-accordion-title',
  accordionContentName: 'ss-accordion-content',

  toggle() {
    if (this.get('content').isOpen() || this.get('content').isOpening()) {
      return;
    }
  }
});
