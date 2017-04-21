import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-content', 'Integration | Component | ss accordion content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ss-accordion-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ss-accordion-content}}
      template block text
    {{/ss-accordion-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
