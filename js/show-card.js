'use strict';

window.showCard = (function () {
  var onDialogClose = null;
  return function (elem, callback) {
    elem.style.display = 'block';
    onDialogClose = callback;
  };
})();
