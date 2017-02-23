'use strict';

window.synchronizeFields = (function () {
  return function (elem1, elem2, arrea1, arrea2, property, callback) {
    elem1.addEventListener('change', function () {
      callback(elem1, elem2, arrea1, arrea2, property);
    });
  };
})();
