import { run } from '@ember/runloop';
import { A } from '@ember/array';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-group', 'Integration | Component | ss accordion group', {
  integration: true
});


test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
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
  assert.equal(this.$('.ui.accordion').length, 1);
  assert.equal(this.$('.ui.accordion .active').length, 2);
});

test('clicking activates title', function(assert) {
  assert.expect(4);

  this.render(hbs`
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

  assert.equal(this.$('.ui.accordion .one.title.active').length, 0);
  assert.equal(this.$('.ui.accordion .one.content.active').length, 0);

  // Test clicking activates accordion
  this.$('.ui.accordion .one.title').click();
  assert.equal(this.$('.ui.accordion .one.title.active').length, 1);
  assert.equal(this.$('.ui.accordion .one.content.active').length, 1);
});

test('dynamically added content is clickable', function(assert) {
  assert.expect(7);

  this.set('panes', A([]));

  this.render(hbs`
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

  assert.equal(this.$('.ui.accordion').length, 1);
  assert.equal(this.$('.ui.accordion .title').length, 2);
  assert.equal(this.$('.ui.accordion .content').length, 2);

  run(() => {
    this.get('panes').pushObjects([1,2]);
  });

  assert.equal(this.$('.ui.accordion .title').length, 4);
  assert.equal(this.$('.ui.accordion .content').length, 4);

  // Test clicking activates accordion
  this.$('.ui.accordion [data-test-extra-title=1]').click();
  assert.equal(this.$('.ui.accordion [data-test-extra-title=1].active').length, 1);
  assert.equal(this.$('.ui.accordion .active').length, 2);
});

test('exclusive false allows more than one active title', function(assert) {
  assert.expect(4);

  this.render(hbs`
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
  this.$('.ui.accordion .two.title').click();
  assert.equal(this.$('.ui.accordion .two.active').length, 2);
  assert.equal(this.$('.ui.accordion .active').length, 2);

  this.$('.ui.accordion .one.title').click();
  assert.equal(this.$('.ui.accordion .one.active').length, 2);
  assert.equal(this.$('.ui.accordion .active').length, 2);
});

test('collapsible false allows doesnt allow active to close', function(assert) {
  assert.expect(4);

  this.render(hbs`
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

  assert.equal(this.$('.ui.accordion .active').length, 0);
  // Test clicking activates accordion
  this.$('.ui.accordion .one.title').click();
  assert.equal(this.$('.ui.accordion .one.active').length, 2);
  assert.equal(this.$('.ui.accordion .active').length, 2);

  this.$('.ui.accordion .one.title').click();
  assert.equal(this.$('.ui.accordion .active').length, 2);
});