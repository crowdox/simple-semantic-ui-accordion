import Ember from 'ember';
import SSTransition from 'manage/mixins/ss-transition';

export default Ember.Component.extend(SSTransition, {
  classNames: ['content'],

  _isActive: Ember.computed.readOnly('accordion.isActive'),

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.get('_isActive')) {
        this.$().addClass('active');
      }
    });
  },

  activeChanged: Ember.observer('_isActive', function () {
    Ember.Logger.info('active changed');
    if (this.get('_isActive')) {
      if (this.isOpened() || this.isOpening()) {
        Ember.Logger.info('open returned early');
        return;
      }
      Ember.Logger.info('opening');
      this.open();
    } else {
      if (this.isClosed() || this.isClosing()) {
        Ember.Logger.info('closing early');
        return;
      }

      Ember.Logger.info('is closing');
      this.close();
    }
  }),

  // Transition Defaults
  transitionScope: '> *:not(.ui.dimmer)',
  transitionMode: Ember.computed.readOnly('accordion.transitionMode'),
  transitionDuration: Ember.computed.readOnly('accordion.duration'),

  isOpened() {
    let scope = this.$();
    return scope.hasClass('active') &&
           !scope.hasClass('animating');
  },

  isOpening() {
    let scope = this.$();
    return scope.hasClass('active') &&
           scope.hasClass('animating') &&
           this.get('_isActive');
  },

  isClosed() {
    let scope = this.$();
    return !scope.hasClass('active');
  },

  isClosing() {
    let scope = this.$();
    return scope.hasClass('active') &&
           scope.hasClass('animating') &&
           !this.get('_isActive');
  },

  open() {
    // this.transitionIn();
    let scope = this.$();

    scope.slideDown(this.get('transitionDuration'), 'easeOutQuad', Ember.run.bind(this, this._opened));
    scope.addClass('active animating');
  },

  _opened() {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }

    if (this.isClosed() || this.isClosing() || this.isOpened()) {
      return;
    }

    let scope = this.$();
    scope.addClass('active');
    scope.removeClass('animating');
  },

  close() {
    // this.transitionOut();
    let scope = this.$();
    scope.addClass('active animating');
    scope.slideUp(this.get('transitionDuration'), 'easeOutQuad', Ember.run.bind(this, this._closed));
  },

  _closed() {
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }

    if (this.isOpened() || this.isOpening() || this.isClosed()) {
      return;
    }

    this.$().removeClass('active animating');
  }
});
