import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-content', 'Integration | Component | ss accordion content', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  let registerCalled = false;
  this.set('accordion', {
    registerContent() {
      registerCalled = true;
    }
  });
  // Template block usage:
  this.render(hbs`
    {{#ss-accordion-content accordion=accordion}}
      template block text
    {{/ss-accordion-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(registerCalled, true);
});
