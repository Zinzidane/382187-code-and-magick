// wizard.js
'use strict';

(function () {
  var WIZARD_PARAMS = {
    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    eyesColors: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    fireballColors: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  var setup = document.querySelector('.setup');
  var wizardSetup = setup.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  window.colorizeElement(wizardCoat, WIZARD_PARAMS.coatColors, function (element, color) {
    element.style.fill = color;
    window.wizard.onCoatChange(color);
  });

  window.colorizeElement(wizardEyes, WIZARD_PARAMS.eyesColors, function (element, color) {
    element.style.fill = color;
    window.wizard.onEyesChange(color);
  });

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(fireball, WIZARD_PARAMS.fireballColors, changeElementBackground);
  window.wizard = wizard;

  return window.wizard;
})();
