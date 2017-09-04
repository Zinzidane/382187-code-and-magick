// colorize-element.js
'use strict';

(function () {

  window.colorizeElement = function (element, array, action) {
    element.addEventListener('click', function () {
      action(element, array[Math.floor(Math.random() * array.length)]);
    });
  };

})();
