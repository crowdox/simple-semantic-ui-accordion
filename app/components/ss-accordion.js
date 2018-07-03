import Component from '@ember/component';
// Relative path works since both survey and manage are in lib/...
import AccordionBaseMixin from '../mixins/ss-accordion-base';

export default Component.extend(AccordionBaseMixin, {
  classNames: ['ui', 'accordion'],

  perform() {
    this.toggle();
  }
});
