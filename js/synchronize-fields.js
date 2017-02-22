'use strict';

window.synchronizeFields = (function () {
  return function (elem1, elem2, arrea1, arrea2, callback) {
    elem1.addEventListener('change', function () {
      var value = arrea1.indexOf(elem1.value);
      callback(elem2, arrea2[value]);
    });
  };
})();
