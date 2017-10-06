import Ember from 'ember';
// Relative path works since both survey and manage are in lib/...
import AccordionBaseMixin from '../mixins/ss-accordion-base';

export default Ember.Component.extend(AccordionBaseMixin, {
  classNames: ['ui', 'accordion'],

  perform() {
    this.toggle();
  }
});
