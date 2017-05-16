import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-title', 'Integration | Component | ss accordion title', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  let registerCalled = false;
  this.set('accordion', {
    registerTitle() {
      registerCalled = true;
    }
  });
  // Template block usage:
  this.render(hbs`
    {{#ss-accordion-title accordion=accordion}}
      template block text
    {{/ss-accordion-title}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(registerCalled, true);
});
