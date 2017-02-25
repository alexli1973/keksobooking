'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var name = document.createElement('span');
    name.textContent = wizard.name;
    wizardElement.appendChild(name);

    var svgElement = wizardElement.children[0];
    svgElement.style.position = 'static';
    svgElement.style.width = 50;
    svgElement.style.height = 50;

    svgElement.querySelector('#wizard-coat').style.fill = wizard.color_coat;
    svgElement.querySelector('#wizard-eyes').style.fill = wizard.color_eyes;

    return wizardElement;
  };
})();
