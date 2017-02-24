'use strict';

(function () {
  // Автоматическая корректировка полей в форме
  // 1. Поля «время заезда» и «время выезда» синхронизированы — при изменении значения одного поля,
  // во втором выделяется соответствующее ему
  var time = document.querySelector('#time');
  var timeout = document.querySelector('#timeout');

  var syncValue = function (elem1, elem2, arrea1, arrea2, property) {
    var value = arrea1.indexOf(elem1.value);
    elem2[property] = arrea2[value];
  };

  window.synchronizeFields(time, timeout, ['12', '13', '14'], ['12', '13', '14'], 'value', syncValue);
  window.synchronizeFields(timeout, time, ['12', '13', '14'], ['12', '13', '14'], 'value', syncValue);

  // 2. Значение поля «Тип жилья» синхронизировано с минимальной ценой следующим образом:
  // «Квартира» — минимальная цена 1000
  // «Лачуга» — минимальная цена 0
  // «Дворец» — минимальная цена 10000
  var typeHouse = document.querySelector('#type');
  var capacity = document.querySelector('#capacity');
  var price = document.querySelector('#price');

  window.synchronizeFields(typeHouse, price, ['flat', 'shack', 'palace'], ['1000', '1000', '10000'], 'value', syncValue);
  window.synchronizeFields(price, typeHouse, ['1000', '1000', '10000'], ['flat', 'shack', 'palace'], 'value', syncValue);

  // 3. Количество комнат связано с количеством гостей:
  // 2 или 100 комнат — «для 3 гостей»; 1 комната — «не для гостей»
  var roomNumber = document.querySelector('#room_number');

  window.synchronizeFields(roomNumber, capacity, ['1', '2', '100'], ['0', '0', '3'], 'value', syncValue);
  window.synchronizeFields(capacity, roomNumber, ['0', '0', '3'], ['1', '2', '100'], 'value', syncValue);
})();
