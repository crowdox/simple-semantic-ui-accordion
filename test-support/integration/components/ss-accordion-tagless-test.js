import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss accordion tagless', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    // Template block usage:
    await render(hbs`
      {{#ss-accordion-tagless}}
        template block text
      {{/ss-accordion-tagless}}
    `);

    assert.dom().hasText('template block text');
  });
});
