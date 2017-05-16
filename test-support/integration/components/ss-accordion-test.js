import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion', 'Integration | Component | ss accordion', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
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
  assert.equal(this.$('.ui.accordion').length, 1);
  assert.equal(this.$('.ui.accordion .active').length, 0);
});

test('clicking activates title', function(assert) {
  assert.expect(4);

  this.render(hbs`
    {{#ss-accordion class="styled" as |ss|}}
      {{#ss.title}}
        Semantic UI
      {{/ss.title}}
      {{#ss.content}}
        Accordion Component
      {{/ss.content}}
    {{/ss-accordion}}
  `);

  assert.equal(this.$('.ui.accordion .title.active').length, 0);
  assert.equal(this.$('.ui.accordion .content.active').length, 0);

  // Test clicking activates accordion
  this.$('.ui.accordion .title').click();
  assert.equal(this.$('.ui.accordion .title.active').length, 1);
  assert.equal(this.$('.ui.accordion .content.active').length, 1);
});
