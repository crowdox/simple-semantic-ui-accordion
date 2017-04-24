import Ember from 'ember';
import SSTransition from 'manage/mixins/ss-transition';

export default Ember.Component.extend(SSTransition, {
  classNames: ['content'],

  // Transition Defaults
  transitionMode: 'fade',
  transitionScope: '> *',
  // Passed in from accordion
  //transitionDuration: 350

  isOpened() {

  },

  isOpening() {

  },

  isClosed() {

  },

  isClosing() {

  },

  open() {

  },

  _opened() {

  },

  close() {

  },

  _closed() {

  }
});
