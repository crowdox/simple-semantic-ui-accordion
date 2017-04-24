import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'accordion'],
  accordionComponentName: 'ss-accordion-tagless',

  exclusive: true,
  collapsible: true,
  duration: 500,
  transitionMode: 'fade',

  activeItems: null,

  init() {
    this._super(...arguments);
    this.set('activeItems', Ember.A([]));
  },

  toggle(name) {
    let activeItems = this.get('activeItems');
    if (!this.get('collapsible')) {
      // If we only have one item left, and its the item passed in, return. We can't collapse
      if (activeItems.get('length') === 1 && activeItems.isAny('name', name)) {
        return;
      }
    }

    // We have a new item coming in, check if exclusive is true
    // If its exclusive, only one can be open at a time
    if (this.get('exclusive')) {
      if (activeItems.get('length') !== 1) {
        // Remove all the items
        let exists = activeItems.isAny('name', name);
        activeItems.clear();

        // If the name passed in already exists, then return so we don't reactivate it
        if (exists) {
          this.endPropertyChanges();
          return;
        }
      }
    }

    let existing = activeItems.findBy('name', name);
    if (Ember.isPresent(existing)) {
      activeItems.removeObject(existing);
    } else {
      activeItems.addObject(Ember.Object.create({ name: name }));
    }
  }
});
