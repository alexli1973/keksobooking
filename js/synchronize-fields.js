'use strict';

window.synchronizeFields = function (elem1, elem2, arrea1, arrea2, nameProp) {

  elem1.addEventListener('change', function () {
    elem2[nameProp] = arrea2[nameProp];
  });

  elem2.addEventListener('change', function () {
    elem1[nameProp] = arrea1[nameProp];
  });
};
