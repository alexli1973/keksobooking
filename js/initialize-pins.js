'use strict';

window.initializePins = function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');

  var dialogKeydownHendler = function (evt) {
    if (window.utils.isDeactivateEvent(evt)) {
      closeDialog();
      disablePin();
    }
  };

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
  closeDialog();
  // все метки изначально неактивны
  disablePin();

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
  var pinClickHandler = function (evt) {
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
    if (window.utils.isActivationEvent(evt)) {
      var curentPin = event.target;
      disablePin();
      activePin(curentPin);
      openDialog();
    }
  };

  var pinKeydownHandler = function (evt) {
    if (window.utils.isActivationEvent(evt)) {
      pinClickHandler(evt);
    }
  };

  tokyoPinMap.addEventListener('click', pinClickHandler, true);
  tokyoPinMap.addEventListener('keydown', pinKeydownHandler, true);

  // Закрытие карточки объявления
  // При нажатии на элемент dialog__close карточка объявления должна скрываться.
  // При этом должен деактивироваться элемент pin, который был помечен как активный
  var btnDialogClose = dialog.querySelector('.dialog__close');
  btnDialogClose.addEventListener('click', function () {
    closeDialog();
    disablePin();
  });
};
