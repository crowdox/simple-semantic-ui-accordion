import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['ui', 'accordion'],
  accordionComponentName: 'ss-accordion-tagless',

  exclusive: true,
  collapsible: true,
  duration: 500,
  transitionMode: 'fade',

  accordions: null,

  init() {
    this._super(...arguments);
    this.set('accordions', A([]));
  },

  perform(current) {
    let accordions = this.get('accordions');
    accordions.addObject(current);

    for (let accordion of accordions) {
      if (current !== accordion) {
        if (this.get('exclusive') === true && accordion.get('isActive') === true) {
          accordion.toggle();
        }
      }
    }

    if (this.get('collapsible') === false) {
      if (current.get('isActive') === false) {
        current.toggle();
      }
    } else {
      current.toggle();
    }
  }
});
