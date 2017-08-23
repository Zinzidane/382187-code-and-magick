// setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createRandomWizard = function () {
  return {
    'name': getRandomElement(names) + ' ' + getRandomElement(surnames),
    'coatColor': getRandomElement(coatColor),
    'eyesColor': getRandomElement(eyesColor)
  };
};

var getRandomWizards = function (num) {
  var wzrds = [];

  for (var i = 0; i < num; i++) {
    wzrds.push(createRandomWizard());
  }

  return wzrds;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addWizards = function (fragment, wizards) {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var wizards = getRandomWizards(4);
var fragment = document.createDocumentFragment();

addWizards(fragment, wizards);
document.querySelector('.setup-similar').classList.remove('hidden');

// module4-task1
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');
var userWizardCoat = document.getElementsByClassName('wizard-coat')[0];
var userWizardEyes = document.getElementsByClassName('wizard-eyes')[0];
var userWizardFireball = document.querySelector('.setup-fireball-wrap');
var userNameInput = setup.querySelector('.setup-user-name');


userNameInput.addEventListener('invalid', function () {
  if (!userNameInput.validity.valid) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 1-го символа');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 50-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 1-го символа');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 1) {
    target.setCustomValidity('Имя должно состоять минимум из 1-го символа');
  } else {
    target.setCustomValidity('');
  }
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Функция открытия попапа
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Функция закрытия попапа
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Функция изменения цвета плаща мага
var changeCoatColor = function () {
  userWizardCoat.setAttribute('style', 'fill: ' + getRandomElement(coatColor) + ';');
};

// Функция изменения цвета глаз мага
var changeEyesColor = function () {
  userWizardEyes.setAttribute('style', 'fill: ' + getRandomElement(eyesColor) + ';');
};

// Функция изменения цвета фаербола
var changeFireballColor = function () {
  userWizardFireball.setAttribute('style', 'background-color: ' + getRandomElement(fireballColor) + ';');
};

// Октрытие попапа по нажатию левому клику на аватарку
setupOpen.addEventListener('click', function () {
  openPopup();
});

// Открытие попапа по нажатию клавиши Enter на фокусе аватарки
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Закрытие попапа по нажатию левому клику на крестик
setupClose.addEventListener('click', function () {
  closePopup();
});

// Закрытие попапа по нажатию клавиши Enter на фокусе крестика
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Закрытие окна по левому клику на кнопку "Сохранить"
setupSubmit.addEventListener('click', function (evt) {
  preventDefault();
  closePopup();
});

// Закрытие окна по нажатию клавишей Enter на кнопку "Сохранить"
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    preventDefault();
    closePopup();
  }
});

// Изменение цвета плаща по левому клику на блок с плащом мага
userWizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

// Изменение цвета глаз по левому клику на блок с глазами мага
userWizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

// Изменение цвета фаербола по левому клику на блок с фаерболом
userWizardFireball.addEventListener('click', function () {
  changeFireballColor();
});
