import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-accordion-group', 'Integration | Component | ss accordion group', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ss-accordion-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ss-accordion-group}}
      template block text
    {{/ss-accordion-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
