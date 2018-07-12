'use strict';

var bus = require('framebus');
var requestDiv = document.querySelector('#request-from');

bus.on('message', function (data) {
  requestDiv.innerText = data.message;

  bus.emit('reply', {
    message: 'You sent "' + data.message + '"'
  });
});
