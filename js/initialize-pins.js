'use strict';

window.initializePins = (function () {
  var pins = document.querySelectorAll('.pin');

  // деативировать все метки при закрытии .dialog
  function closeDialogClickHendler() {
    window.showCard.closeDialog();
    disablePin();
  }

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
    window.showCard.openDialog();
    if (window.utils.isActivateEvent(evt)) {
      var curentPin = event.target;
      disablePin();
      activePin(curentPin);
      window.showCard.openDialog();
    }
  }

  // вернуть фокус на активную метку,
  // если карточка была открыта с клавиатуры
  function focusPin() {
    var pinActive = document.querySelector('.pin--active');
    pinActive.focus();
  }

  function pinKeydownHandler(evt) {
    if (window.utils.isActivateEvent(evt)) {
      pinClickHandler(evt);
      window.showCard(focusPin);
    }
  }

  return {
    pinClickHandler: pinClickHandler,
    pinKeydownHandler: pinKeydownHandler,
    closeDialogClickHendler: closeDialogClickHendler
  };
})();
