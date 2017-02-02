'use strict';

// Показ карточки объявления
// При нажатии на любой из элементов .pin ему должен добавляться класс pin--active
// и должен показываться элемент .dialog.
// Если до этого у другого элемента существовал класс pin--active,
// то у этого элемента класс нужно убрать
var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');

dialog.style.display = 'none';

function closeDialog() {
  dialog.style.display = 'none';
}

function openDialog() {
  dialog.style.display = 'block';
}

function disablePin(evt) {
  evt.classList.remove('pin--active');
}
function activePin(evt) {
  evt.classList.add('pin--active');
}

for (var i = 0; i < pins.length; i++) {
  var pin = pins[i];
  var hasPinActive = pin.classList.contains('pin--active');
  pins[i].addEventListener('click', function () {
    if (hasPinActive) {
      disablePin();
      closeDialog();
    } else {
      activePin();
      openDialog();
    }
  });
}

// Закрытие карточки объявления
// При нажатии на элемент dialog__close карточка объявления должна скрываться.
// При этом должен деактивироваться элемент pin, который был помечен как активный
var btnDialogClose = dialog.querySelector('.dialog__close');
btnDialogClose.addEventListener('click', function () {
  closeDialog();
  disablePin();
});

// Валидация полей формы
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var address = document.querySelector('#address');

title.required = true;
title.minLength = 30;
title.maxLength = 100;

price.required = true;
price.propertyType = 'number';
price.min = 1000;
price.max = 1000000;
address.required = true;

// Автоматическая корректировка полей в форме
// 1. Поля «время заезда» и «время выезда» синхронизированы — при изменении значения одного поля,
// во втором выделяется соответствующее ему
var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');

time.addEventListener('change', function () {
  timeout.value = time.value;
});

timeout.addEventListener('change', function () {
  time.value = timeout.value;
});

// 2. Значение поля «Тип жилья» синхронизировано с минимальной ценой следующим образом:
// «Квартира» — минимальная цена 1000
// «Лачуга» — минимальная цена 0
// «Дворец» — минимальная цена 10000
var typeHouse = document.querySelector('#type');
var capacity = document.querySelector('#capacity');

typeHouse.addEventListener('change', function () {
  if (typeHouse.value === 'shack') {
    price.placeholder = '0';
    price.min = '0';
  } else if (typeHouse.value === 'flat') {
    price.placeholder = '1000';
    price.min = '1000';
  } else {
    price.placeholder = '10000';
    price.min = '10000';
  }
});

// 3. Количество комнат связано с количеством гостей:
// 2 или 100 комнат — «для 3 гостей»; 1 комната — «не для гостей»
var roomNumber = document.querySelector('#room_number');

roomNumber.addEventListener('change', function () {
  capacity.value = roomNumber.value === '1' ? '0' : '3';
});
