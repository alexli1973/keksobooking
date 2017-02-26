'use strict';

window.render = (function () {
  var elemTemplate = document.querySelector('#pin-template');
  var elementToClone = elemTemplate.content.querySelector('.pin');

  return function (elem) {
    var newElement = elementToClone.cloneNode(true);
    newElement.style.left = elem.location.x + 'px';
    newElement.style.top = elem.location.y + 'px';
    newElement.setAttribute('tabindex', '1');
    newElement.setAttribute('role', 'button');
    newElement.setAttribute('aria-pressed', 'false');
    newElement.appendChild(newElement);

    var avatar = newElement.querySelector('.rounded');
    avatar.src = elem.author.avatar;
    avatar.style.width = 40;
    avatar.style.height = 40;

    return newElement;
  };
})();
