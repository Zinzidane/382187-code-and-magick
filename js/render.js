// render.js
'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardSetup = setup.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var WIZARD_PARAMS = window.data.WIZARD_PARAMS;
  var wizards = window.data.wizards;


  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }


  function renderWizards() {
    var fragment = document.createDocumentFragment();
    var count = wizards.length;

    for (var i = 0; i < count; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    return fragment;
  }

  function getWizardElementRandomColor(element, array) {
    element.style.fill = window.util.getRandomElement(array);
  }


  function getRandomFireballColor() {
    fireball.style.background = window.util.getRandomElement(WIZARD_PARAMS.fireballColors);
  }


  wizardCoat.addEventListener('click', function () {
    getWizardElementRandomColor(wizardCoat, WIZARD_PARAMS.coatColors);
  });

  wizardEyes.addEventListener('click', function () {
    getWizardElementRandomColor(wizardEyes, WIZARD_PARAMS.eyesColors);
  });

  fireball.addEventListener('click', function () {
    getRandomFireballColor();
  });


  renderWizards();

  similarListElement.appendChild(renderWizards());

  window.render = {
    setup: setup
  };
})();
