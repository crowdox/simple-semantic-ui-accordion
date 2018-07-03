import { scheduleOnce, bind } from '@ember/runloop';
import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
// Relative path works since both survey and manage are in lib/...
import SSTransition from '../mixins/ss-transition';

export default Component.extend(SSTransition, {
  classNames: ['content'],

  _isActive: readOnly('accordion.isActive'),

  isOpening: false,
  isClosing: false,

  init() {
    this._super(...arguments);
    this.get('accordion').registerContent(this);
  },

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, function() {
      if (this.get('_isActive')) {
        this.$().addClass('active');
      }
    });
  },

  toggle() {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }

    if (this.get('_isActive')) {
      if (this.isOpened() || this.get('isOpening')) {
        return;
      }
      this.open();
    } else {
      if (this.isClosed() || this.get('isClosing')) {
        return;
      }

      this.close();
    }
  },

  // Transition Defaults
  transitionScope: '> *:not(.ui.dimmer)',
  transitionMode: readOnly('accordion.transitionMode'),
  transitionDuration: readOnly('accordion.duration'),

  isOpened() {
    let scope = this.$();
    return scope.hasClass('active') &&
           !scope.hasClass('animating');
  },

  isClosed() {
    let scope = this.$();
    return !scope.hasClass('active');
  },

  open() {
    this.transitionIn();
    let scope = this.$();

    this.setProperties({
      isOpening: true,
      isClosing: false
    });

    scope.slideDown(this.get('transitionDuration'), 'easeOutQuad', bind(this, this._opened));
    scope.addClass('active animating');
  },

  _opened() {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }

    if (this.isClosed() || this.get('isClosing') || this.isOpened()) {
      return;
    }

    let scope = this.$();
    scope.addClass('active');
    scope.removeClass('animating');
    this.set('isOpening', false);
  },

  close() {
    this.transitionOut();
    let scope = this.$();

    this.setProperties({
      isOpening: false,
      isClosing: true
    });

    scope.addClass('active animating');
    scope.slideUp(this.get('transitionDuration'), 'easeOutQuad', bind(this, this._closed));
  },

  _closed() {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }

    if (this.isOpened() || this.get('isOpening') || this.isClosed()) {
      return;
    }

    this.$().removeClass('active animating');
    this.set('isClosing', false);
  }
});
