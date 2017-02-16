'use strict';

(function () {
  // по клику на метку открывается попап .dialog и меняется цвет метки
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');

  tokyoPinMap.addEventListener('click', window.initializePins.pinClickHandler, true);
  tokyoPinMap.addEventListener('keydown', window.initializePins.pinKeydownHandler, true);

  // Закрытие карточки объявления
  // При нажатии на элемент dialog__close карточка объявления должна скрываться.
  // При этом должен деактивироваться элемент pin, который был помечен как активный
  var btnDialogClose = document.querySelector('.dialog__close');

  btnDialogClose.addEventListener('click', window.initializePins.closeDialogClickHendler);
})();
