import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss accordion content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    let registerCalled = false;
    this.set('accordion', {
      registerContent() {
        registerCalled = true;
      }
    });

    // Template block usage:
    await render(hbs`
      {{#ss-accordion-content accordion=accordion}}
        template block text
      {{/ss-accordion-content}}
    `);

    assert.dom().hasText('template block text');
    assert.equal(registerCalled, true);
  });
});
