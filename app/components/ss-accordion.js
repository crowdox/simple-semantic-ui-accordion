import Ember from 'ember';
import AccordionBaseMixin from '../mixins/ss-accordion-base';

export default Ember.Component.extend(AccordionBaseMixin, {
  classNames: ['ui', 'accordion'],

  isActive: false,

  toggle() {
    this.toggleProperty('isActive');
  }
});
