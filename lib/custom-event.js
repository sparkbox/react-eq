'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

(function customEventPolyfill() {
  // eslint-disable-line consistent-return
  if (typeof window === 'undefined' || typeof window.CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || // eslint-disable-line no-param-reassign
    {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();