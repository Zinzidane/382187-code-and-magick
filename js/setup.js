// setup.js
'use strict';

(function () {
  var setup = window.render.setup;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupUserName = setup.querySelector('.setup-user-name');

  function popupEscPressHandler(evt) {
    window.util.isEscEvent(evt, function () {
      if (evt.target !== setupUserName) {
        closePopup();
      }
    });
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  }

  function closePopup() {
    setup.style.top = '100px';
    setup.style.left = '50%';
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });


  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window. util.isEnterEvent(evt, closePopup);
  });

  setupSubmit.addEventListener('click', function () {
    if (setupUserName.checkValidity() === true) {
      closePopup();
    }
  });

  setupSubmit.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });


  setup.querySelector('.setup-similar').classList.remove('hidden');

  // drag-n-drop module5-task2

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    artifactsElement.style.outline = '';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    artifactsElement.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
