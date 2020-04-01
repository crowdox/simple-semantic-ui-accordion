import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';

module('Integration | Component | ss accordion group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#ss-accordion-group class="styled" duration=0 as |ss|}}
        {{#ss.accordion isOpen=true as |ss|}}
          {{#ss.title}}
            Semantic UI
          {{/ss.title}}
          {{#ss.content}}
            Accordion Component
          {{/ss.content}}
        {{/ss.accordion}}
        {{#ss.accordion as |ss|}}
          {{#ss.title}}
            Title 2
          {{/ss.title}}
          {{#ss.content}}
            Content 2
          {{/ss.content}}
        {{/ss.accordion}}
      {{/ss-accordion-group}}
    `);

    // Test default state
    assert.dom('.ui.accordion').exists();
    assert.dom('.ui.accordion .active').exists({ count: 2 });
  });

  test('clicking activates title', async function(assert) {
    assert.expect(4);

    await render(hbs`
      {{#ss-accordion-group class="styled" duration=0 as |ss|}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="one"}}
            Semantic UI
          {{/ss.title}}
          {{#ss.content class="one"}}
            Accordion Component
          {{/ss.content}}
        {{/ss.accordion}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="two"}}
            Title 2
          {{/ss.title}}
          {{#ss.content class="two"}}
            Content 2
          {{/ss.content}}
        {{/ss.accordion}}
      {{/ss-accordion-group}}
    `);

    assert.dom('.ui.accordion .one.title.active').doesNotExist();
    assert.dom('.ui.accordion .one.content.active').doesNotExist();

    // Test clicking activates accordion
    await click('.ui.accordion .one.title');
    assert.dom('.ui.accordion .one.title.active').exists();
    assert.dom('.ui.accordion .one.content.active').exists();
  });

  test('dynamically added content is clickable', async function(assert) {
    assert.expect(7);

    this.set('panes', A([]));

    await render(hbs`
      {{#ss-accordion-group class="styled" duration=0 as |ss|}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="one"}}
            Semantic UI
          {{/ss.title}}
          {{#ss.content class="one"}}
            Accordion Component
          {{/ss.content}}
        {{/ss.accordion}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="two"}}
            Title 2
          {{/ss.title}}
          {{#ss.content class="two"}}
            Content 2
          {{/ss.content}}
        {{/ss.accordion}}
        {{#each panes as |pane|}}
          {{#ss.accordion as |ss|}}
            {{#ss.title data-test-extra-title=pane}}
              Extra Section {{pane}}
            {{/ss.title}}
            {{#ss.content data-test-extra-content=pane}}
              Extra Content {{pane}}
            {{/ss.content}}
          {{/ss.accordion}}
        {{/each}}
      {{/ss-accordion-group}}
    `);

    assert.dom('.ui.accordion').exists();
    assert.dom('.ui.accordion .title').exists({ count: 2 });
    assert.dom('.ui.accordion .content').exists({ count: 2 });

    this.get('panes').pushObjects([1,2]);
    await settled();

    assert.dom('.ui.accordion .title').exists({ count: 4 });
    assert.dom('.ui.accordion .content').exists({ count: 4 });

    // Test clicking activates accordion
    await click('.ui.accordion [data-test-extra-title="1"]');
    assert.dom('.ui.accordion [data-test-extra-title="1"].active').exists();
    assert.dom('.ui.accordion .active').exists({ count: 2 });
  });

  test('exclusive false allows more than one active title', async function(assert) {
    assert.expect(4);

    await render(hbs`
      {{#ss-accordion-group class="styled" duration=0 as |ss|}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="one"}}
            Semantic UI
          {{/ss.title}}
          {{#ss.content class="one"}}
            Accordion Component
          {{/ss.content}}
        {{/ss.accordion}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="two"}}
            Title 2
          {{/ss.title}}
          {{#ss.content class="two"}}
            Content 2
          {{/ss.content}}
        {{/ss.accordion}}
      {{/ss-accordion-group}}
    `);

    // Test clicking activates accordion
    await click('.ui.accordion .two.title');
    assert.dom('.ui.accordion .two.active').exists({ count: 2 });
    assert.dom('.ui.accordion .active').exists({ count: 2 });

    await click('.ui.accordion .one.title');
    assert.dom('.ui.accordion .one.active').exists({ count: 2 });
    assert.dom('.ui.accordion .active').exists({ count: 2 });
  });

  test('collapsible false allows doesnt allow active to close', async function(assert) {
    assert.expect(4);

    await render(hbs`
      {{#ss-accordion-group class="styled" duration=0 collapsible=false as |ss|}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="one"}}
            Semantic UI
          {{/ss.title}}
          {{#ss.content class="one"}}
            Accordion Component
          {{/ss.content}}
        {{/ss.accordion}}
        {{#ss.accordion as |ss|}}
          {{#ss.title class="two"}}
            Title 2
          {{/ss.title}}
          {{#ss.content class="two"}}
            Content 2
          {{/ss.content}}
        {{/ss.accordion}}
      {{/ss-accordion-group}}
    `);

    assert.dom('.ui.accordion .active').doesNotExist();
    // Test clicking activates accordion
    await click('.ui.accordion .one.title');
    assert.dom('.ui.accordion .one.active').exists({ count: 2 });
    assert.dom('.ui.accordion .active').exists({ count: 2 });

    await click('.ui.accordion .one.title');
    assert.dom('.ui.accordion .active').exists({ count: 2 });
  });
});
