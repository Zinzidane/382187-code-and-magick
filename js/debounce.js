// debounce.js
'use strict';

window.debounce = function (func, wait) {
  var timeout;
  return function (func, wait) {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

