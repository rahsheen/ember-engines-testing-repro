import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'super-blog';
const resolver = engineResolverFor(modulePrefix);

module('Integration | Component | test-component', function(hooks) {
  setupRenderingTest(hooks, {resolver});

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TestComponent />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it fails to find models from host app', async function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('rental', {});
    assert.ok(model);
  })
});
