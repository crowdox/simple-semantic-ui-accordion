import EmberObject from '@ember/object';
// Relative path works since both survey and manage are in lib/...
import SsAccordionBaseMixin from '../../../mixins/ss-accordion-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ss accordion base');

// Replace this with your real tests.
test('it works', function(assert) {
  let SsAccordionBaseObject = EmberObject.extend(SsAccordionBaseMixin);
  let subject = SsAccordionBaseObject.create();
  assert.ok(subject);
});
