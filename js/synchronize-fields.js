'use strict';

window.synchronizeFields = (function () {
  return function (elem1, elem2, arrea1, arrea2, syncValues) {
    elem1.addEventListener('change', function () {
      var value = arrea1.indexOf(elem1.value);
      syncValues(arrea2[value]);
    });

    elem2.addEventListener('change', function () {
      var value = arrea2.indexOf(elem1.value);
      syncValues(arrea1[value]);
    });
  };
})();
