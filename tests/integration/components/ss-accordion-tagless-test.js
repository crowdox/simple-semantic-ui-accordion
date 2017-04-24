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
