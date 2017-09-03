// util.js
'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    // Возвращает массив, перетасованный по алгоритму Фишера–Йейтса в варианте Дуршенфельда
    shuffle: function (array) {
      for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
      }
      return array;
    },

    // Возвращает случайный элемент массива
    getRandomElement: function (array) {
      var randomIndex = Math.floor(Math.random() * array.length);
      var element = array[randomIndex];

      return element;
    },
    // Возвращает максимальное число из массива
    getMaxNumber: function (array) {
      return Math.max.apply(null, array);
    },

    // Возвращает случайное число в заданном диапазоне (не включая max)
    getRandomNumber: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
})();
