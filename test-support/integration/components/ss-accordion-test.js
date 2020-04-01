import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss accordion', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#ss-accordion class="styled" as |ss|}}
        {{#ss.title}}
          Semantic UI
        {{/ss.title}}
        {{#ss.content}}
          Accordion Component
        {{/ss.content}}
      {{/ss-accordion}}
    `);

    // Test default state
    assert.dom('.ui.accordion').exists();
    assert.dom('.ui.accordion .active').doesNotExist();
  });

  test('clicking activates title', async function(assert) {
    assert.expect(4);

    await render(hbs`
      {{#ss-accordion class="styled" as |ss|}}
        {{#ss.title}}
          Semantic UI
        {{/ss.title}}
        {{#ss.content}}
          Accordion Component
        {{/ss.content}}
      {{/ss-accordion}}
    `);

    assert.dom('.ui.accordion .title.active').doesNotExist();
    assert.dom('.ui.accordion .content.active').doesNotExist();

    // Test clicking activates accordion
    await click('.ui.accordion .title');
    assert.dom('.ui.accordion .title.active').exists();
    assert.dom('.ui.accordion .content.active').exists();
  });
});
