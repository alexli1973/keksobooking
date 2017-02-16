'use strict';

window.initializePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');

  function dialogKeydownHendler(evt) {
    if (window.utils.isDeactivateEvent(evt)) {
      closeDialogClickHendler();
    }
  }

  // деативировать все метки при закрытии .dialog
  function closeDialogClickHendler() {
    closeDialog();
    disablePin();
  }

  // открыть окно с объявлением по клику на .pin
  function openDialog() {
    dialog.style.display = 'block';
    document.addEventListener('keydown', dialogKeydownHendler);
  }

  // закрыть окно с объявлением по клику на .pin
  function closeDialog() {
    dialog.style.display = 'none';
    document.removeEventListener('keydown', dialogKeydownHendler);
  }

  // окно с объявлением изначально скрыто
  // все метки изначально неактивны
  closeDialogClickHendler();

  // сделать метку неактивной
  function disablePin() {
    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove('pin--active');
    }
  }

  // сделать метку активной
  function activePin(elem) {
    elem.classList.add('pin--active');
  }

  // Показ карточки объявления
  // При нажатии на любой из элементов .pin ему должен добавляться класс pin--active
  // и должен показываться элемент .dialog.
  // Если до этого у другого элемента существовал класс pin--active,
  // то у этого элемента класс нужно убрать
  function pinClickHandler(evt) {
    var elem = evt.target.classList.contains('pin');
    var targetPin;
    if (elem) {
      targetPin = evt.target;
    } else {
      targetPin = evt.target.parentElement;
    }
    disablePin();
    activePin(targetPin);
    openDialog();
    if (window.utils.isActivateEvent(evt)) {
      var curentPin = event.target;
      disablePin();
      activePin(curentPin);
      openDialog();
    }
  }

  function pinKeydownHandler(evt) {
    if (window.utils.isActivateEvent(evt)) {
      pinClickHandler(evt);
    }
  }

  return {
    pinClickHandler: pinClickHandler,
    pinKeydownHandler: pinKeydownHandler,
    closeDialogClickHendler: closeDialogClickHendler
  };
})();
