'use strict';

window.load = (function () {

  var errorHandler = function (err) {
    return err;
  };

  return function (url, onLoad, onError) {
    // Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // обработка ошибок
    if (typeof onError === 'function') {
      errorHandler = onError;
    }

    xhr.addEventListener('load', function (evt) {
      // Если код ответа сервера не 200, то это ошибка
      if (evt.target.status >= 400) {
        // обработать ошибку
        errorHandler('Failed to load data. Server returned status: ' + evt.target.status);
      } else if (evt.target.status >= 200) {
        // вывести результат
        onLoad(evt.target.response);
      }
    });

    xhr.addEventListener('error', errorHandler);
    xhr.addEventListener('timeout', errorHandler);

    xhr.responseType = 'json';

    // Конфигурируем его: GET-запрос на URL
    xhr.open('GET', url);
    // Отсылаем запрос
    xhr.send();
  };
})();
