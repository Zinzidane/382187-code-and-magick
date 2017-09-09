// setup.js
'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('.setup-wizard-form');
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

  var successHandler = function () {
    closePopup();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style.zIndex = 100;
    node.style.margin = '0 auto';
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'red';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (setupUserName.checkValidity() === true) {
      window.backend.save(successHandler, errorHandler, new FormData(form));
    }
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
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
