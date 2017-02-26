'use strict';

window.render = (function () {
  var elemTemplate = document.querySelector('#pin-template');
  var elementToClone = elemTemplate.content.querySelector('.pin');

  function renderPin(elem) {
    var newElement = elementToClone.cloneNode(true);
    newElement.style.left = elem.location.x + 'px';
    newElement.style.top = elem.location.y + 'px';
    newElement.setAttribute('tabindex', '1');
    newElement.setAttribute('role', 'button');
    newElement.setAttribute('aria-pressed', 'false');
    newElement.appendChild(newElement);

    var fotoElement = newElement.querySelector('.rounded');
    fotoElement.src = elem.author.avatar;
    fotoElement.style.width = 40;
    fotoElement.style.height = 40;

    return newElement;
  }

  function renderAvatar(elem) {
    var photo = document.createElement('img');

    photo.setAttribute('src', elem);
    photo.setAttribute('alt', 'Avatar');
    photo.style.width = 70;
    photo.style.height = 70;

    return photo;
  }

  function renderFeatures(elem) {
    var featuresElement = document.createElement('span');

    featuresElement.classList.add('feature__image');
    featuresElement.classList.add(['feature__image--' + elem]);

    return featuresElement;
  }

  return {
    renderPin: renderPin,
    renderAvatar: renderAvatar,
    renderFeatures: renderFeatures
  };
})();
