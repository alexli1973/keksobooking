'use strict';

window.showCard = (function () {
  var onDialogClose;
  var dialog = document.querySelector('.dialog');

  return function (cb) {
    dialog.style.display = 'block';

    if (typeof onDialogClose === 'function') {
      onDialogClose();
    }

    onDialogClose = cb;
  };
})();
