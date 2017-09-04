// colorize-element.js
'use strict';

(function () {

  window.colorizeElement = function (element, array, action) {
    var active = 0;
    element.addEventListener('click', function () {
      active = ++active % array.length;
      action(element, array[active]);
    });
  };

})();
