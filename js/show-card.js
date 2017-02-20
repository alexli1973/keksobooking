'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  var onDialogClose = null;

  function dialogKeydownHendler(evt) {
    if (window.utils.isDeactivateEvent(evt)) {
      window.initializePins.closeDialogClickHendler();
    }
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

    if (typeof onDialogClose === 'function') {
      onDialogClose();
    }
  }

  // окно с объявлением изначально скрыто
  // все метки изначально неактивны
  window.initializePins.closeDialogClickHendler();

  return function (cb) {
    onDialogClose = cb;
  };
})();
