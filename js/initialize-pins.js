'use strict';

window.initializePins = (function () {
  var pins = document.querySelectorAll('.pin');
  var dialog = document.querySelector('.dialog');
  var onDialogClose = null;
  var curentPin = null;

  function dialogKeydownHendler(evt) {
    if (window.utils.isDeactivateEvent(evt)) {
      closeDialogClickHendler();
    }
  }

  // деативировать все метки при закрытии .dialog
  function closeDialogClickHendler() {
    closeDialog();
    disablePin();

    if (typeof onDialogClose === 'function') {
      onDialogClose();
    }
  }

  // открыть окно с объявлением по клику на .pin
  function openDialog() {
    window.showCard(dialog);
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
      curentPin = event.target;
      disablePin();
      activePin(curentPin);
      openDialog();
      window.initializePins(setFocusPin);
    }
  }

  // поставить фокус на последнюю метку после закрытия карточки
  function setFocusPin() {
    curentPin.focus();
  }

  function pinKeydownHandler(evt) {
    if (window.utils.isActivateEvent(evt)) {
      pinClickHandler(evt);
    }
  }

  // по клику на метку открывается попап .dialog и меняется цвет метки
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');

  tokyoPinMap.addEventListener('click', pinClickHandler, true);
  tokyoPinMap.addEventListener('keydown', pinKeydownHandler, true);

  // Закрытие карточки объявления
  // При нажатии на элемент dialog__close карточка объявления должна скрываться.
  // При этом должен деактивироваться элемент pin, который был помечен как активный
  var btnDialogClose = document.querySelector('.dialog__close');

  btnDialogClose.addEventListener('click', closeDialogClickHendler);

  // function getSimilarApartments(data) {
  //   var similarApartments = [];
  //
  //   for (var i = 0; i < data.length; i++) {
  //     similarApartments[i] = data[i].name;
  //   }
  //
  //   document.body.innerHTML = similarApartments;
  // }

  var errorHandler = function (err) {
    //console.log(err);
  };

  // скачать похожие объявления
  var DATA_URL = 'https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data';
  window.load(DATA_URL, getSimilarApartments, errorHandler);

  return function (cb) {
    onDialogClose = cb;
  };
})();
