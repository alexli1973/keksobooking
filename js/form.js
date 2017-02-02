'use strict';

// Показ карточки объявления
// При нажатии на любой из элементов .pin ему должен добавляться класс pin--active
// и должен показываться элемент .dialog.
// Если до этого у другого элемента существовал класс pin--active,
// то у этого элемента класс нужно убрать
var pins = document.querySelectorAll('.pin');
var dialog = document.querySelector('.dialog');
// var pinActive = document.querySelector('.pin--active');

dialog.style.display = 'none';

function closeDialog() {
  dialog.style.display = 'none';
}

function openDialog() {
  dialog.style.display = 'block';
}

function disablePin() {
  for (var i = 0; i < pins.length; i++) {
    pins[i].classList.remove('pin--active');
  }
}

function activePin(elem) {
  elem.classList.add('pin--active');
}

disablePin();

for (var i = 0; i < pins.length; i++) {
  pins[i].addEventListener('click', function (event) {
    var curentPin = event.currentTarget;
    disablePin();
    activePin(curentPin);
    openDialog();
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
var price = document.querySelector('#price');

typeHouse.addEventListener('change', function () {
  if (typeHouse.value === 'shack') {
    price.placeholder = '0';
    price.min = '0';
  }
  if (typeHouse.value === 'flat') {
    price.placeholder = '1000';
    price.min = '1000';
  }
  if (typeHouse.value === 'palace') {
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
