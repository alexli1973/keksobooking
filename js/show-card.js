'use strict';

window.showCard = (function () {
  var dialog = document.querySelector('.dialog');
  var dialogTitle = dialog.querySelector('.lodge__title');
  var dialogAddress = dialog.querySelector('.lodge__address');
  var dialogPrice = dialog.querySelector('.lodge__price');
  var dialogType = dialog.querySelector('.lodge__type');
  var dialogRoomsGuests = dialog.querySelector('.lodge__rooms-and-guests');
  var dialogCheckInOut = dialog.querySelector('.lodge__checkin-time');
  //var dialogFeatures = dialog.querySelector('.lodge__features');
  var dialogDescription = dialog.querySelector('.lodge__description');
  //var dialogPhotos = dialog.querySelector('.lodge__photos');

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

    renderPhoto(data.offer.photos);
    renderFeatures(data.offer.features);
  }

  return function (element, data) {
    element.style.display = 'block';

    renderDialog(data);
  };
})();
