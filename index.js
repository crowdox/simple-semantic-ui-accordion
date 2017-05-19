/* eslint-env node */
'use strict';

module.exports = {
  name: 'simple-semantic-ui-accordion',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    app.import('vendor/javascripts/easeOutQuad.js');
  }
};
