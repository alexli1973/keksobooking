'use strict';

window.synchronizeFields = function (elem1, elem2, arrea1, arrea2, nameProp) {

  elem1.addEventListener('change', function () {
    var value = arrea1[elem1.value];
    elem2[nameProp] = arrea2[value];
  });

  elem2.addEventListener('change', function () {
    var value = arrea2.indexOf(elem2.value);
    elem1[nameProp] = arrea1[value];
  });
};
