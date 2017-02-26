'use strict';

window.showCard = (function () {
  var dialogTemplate = document.querySelector('#dialog-template');
  var dialogElement = dialogTemplate.content.querySelector('.dialog');
  var dialogClone = dialogElement.cloneNode(true);
  var dialogTitle = dialogClone.querySelector('.lodge__title');
  var dialogAddress = dialogClone.querySelector('.lodge__address');
  var dialogPrice = dialogClone.querySelector('.lodge__price');
  var dialogType = dialogClone.querySelector('.lodge__type');
  var dialogRoomsGuests = dialogClone.querySelector('.lodge__rooms-and-guests');
  var dialogCheckInOut = dialogClone.querySelector('.lodge__checkin-time');
  var dialogFeatures = dialogClone.querySelector('.lodge__features');
  var dialogDescription = dialogClone.querySelector('.lodge__description');
  var dialogPhotos = dialogClone.querySelector('.lodge__photos');

  function renderFeatures(data) {
    var featuresList = data.offer.features;
    var fragment = document.createDocumentFragment();

    featuresList.forEach(function (elem) {
      fragment.appendChild(window.render.renderFeatures(elem));
    });

    return fragment;
  }

  function renderPhoto(data) {
    var photosList = data.offer.photos;
    var fragment = document.createDocumentFragment();

    photosList.forEach(function (elem) {
      fragment.appendChild(window.render.renderAvatar(elem));
    });

    return fragment;
  }

  function renderDialog(data) {
    dialogTitle.textContent = data.offer.title;
    dialogAddress.textContent = data.offer.address;
    dialogPrice.textContent = data.offer.price;
    dialogType.textContent = data.offer.type;
    dialogRoomsGuests.textContent = data.offer.rooms + ' комнат для ' + data.offer.guests + ' гостей ';
    dialogCheckInOut.textContent = 'Заед после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
    dialogDescription.textContent = data.offer.description;

    dialogPhotos.innerHTML = renderPhoto(data.offer.photos);
    dialogFeatures.innerHTML = renderFeatures(data.offer.features);
  }

  return function (element, data) {
    element.style.display = 'block';

    renderDialog(data);
  };
})();
