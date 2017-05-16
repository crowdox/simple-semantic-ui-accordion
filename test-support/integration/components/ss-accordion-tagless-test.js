import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-tagless', 'Integration | Component | ss accordion tagless', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ss-accordion-tagless}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ss-accordion-tagless}}
      template block text
    {{/ss-accordion-tagless}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


// test('it renders', function(assert) {
//   assert.expect(2);

//   this.render(hbs`
//     {{#ui-accordion class="styled"}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two
//       </div>
//     {{/ui-accordion}}
//   `);

//   // Test default state
//   assert.equal(this.$('.ui.accordion').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 0);
// });

// test('clicking activates title', function(assert) {
//   assert.expect(2);

//   this.render(hbs`
//     {{#ui-accordion class="styled"}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two
//       </div>
//     {{/ui-accordion}}
//   `);

//   // Test clicking activates accordion
//   this.$('.ui.accordion [data-id=title-2]').click();
//   assert.equal(this.$('.ui.accordion [data-id=title-2].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 1);
// });

// test('dynamically added content is clickable', function(assert) {
//   assert.expect(7);

//   this.set('panes', Ember.A([]));

//   this.render(hbs`
//     {{#ui-accordion class="styled"}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two
//       </div>
//       {{#each panes as |pane|}}
//       <div class="title" data-id="extra-title-{{pane}}">
//         Extra Section {{pane}}
//       </div>
//       <div class="content" data-id="extra-content-{{pane}}">
//         Extra Content {{pane}}
//       </div>
//       {{/each}}
//     {{/ui-accordion}}
//   `);

//   assert.equal(this.$('.ui.accordion').length, 1);
//   assert.equal(this.$('.ui.accordion .title').length, 2);
//   assert.equal(this.$('.ui.accordion .content').length, 2);

//   Ember.run(() => {
//     this.get('panes').pushObjects([1,2]);
//   });

//   assert.equal(this.$('.ui.accordion .title').length, 4);
//   assert.equal(this.$('.ui.accordion .content').length, 4);

//   // Test clicking activates accordion
//   this.$('.ui.accordion [data-id=extra-title-1]').click();
//   assert.equal(this.$('.ui.accordion [data-id=extra-title-1].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 1);
// });

// test('exclusive false allows more than one active title', function(assert) {
//   assert.expect(4);

//   this.render(hbs`
//     {{#ui-accordion class="styled" exclusive=false}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two
//       </div>
//     {{/ui-accordion}}
//   `);

//   // Test clicking activates accordion
//   this.$('.ui.accordion [data-id=title-2]').click();
//   assert.equal(this.$('.ui.accordion [data-id=title-2].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 1);

//   this.$('.ui.accordion [data-id=title-1]').click();
//   assert.equal(this.$('.ui.accordion [data-id=title-1].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 2);
// });

// test('collapsible false allows doesnt allow active to close', function(assert) {
//   assert.expect(4);

//   this.render(hbs`
//     {{#ui-accordion class="styled" collapsible=false}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two
//       </div>
//     {{/ui-accordion}}
//   `);

//   assert.equal(this.$('.ui.accordion .active').length, 0);
//   // Test clicking activates accordion
//   this.$('.ui.accordion [data-id=title-2]').click();
//   assert.equal(this.$('.ui.accordion [data-id=title-2].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 1);

//   this.$('.ui.accordion [data-id=title-2]').click();
//   assert.equal(this.$('.ui.accordion .active').length, 1);
// });

// test('composable action closes open tab', function(assert) {
//   assert.expect(4);

//   this.render(hbs`
//     {{#ui-accordion class="styled" collapsible=false as |execute|}}
//       <div class="title" data-id="title-1">
//         Semantic UI
//       </div>
//       <div class="content" data-id="content-1">
//         Accordion Component
//       </div>
//       <div class="title" data-id="title-2">
//         Section Two
//       </div>
//       <div class="content" data-id="content-2">
//         Content Two

//         <div class="ui button" data-id="content-2-button" {{action execute "close" 1}}>Close</div>
//       </div>
//     {{/ui-accordion}}
//   `);

//   assert.equal(this.$('.ui.accordion .active').length, 0);
//   // Test clicking activates accordion
//   this.$('.ui.accordion [data-id=title-2]').click();
//   assert.equal(this.$('.ui.accordion [data-id=title-2].active').length, 1);
//   assert.equal(this.$('.ui.accordion .active').length, 1);

//   this.$('.ui.accordion [data-id=content-2-button]').click();

//   let done = assert.async();

//   setTimeout(() => {
//     assert.equal(this.$('.ui.accordion .active').length, 0);
//     done();
//   }, 500);
// });