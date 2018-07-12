'use strict';

var bus = require('framebus');
var btn = document.querySelector('#button');
var message = document.querySelector('#message');
var response = document.querySelector('#response-back');

btn.addEventListener('click', function () {
  bus.emit('message', {
    message: message.value
  });
});

bus.on('reply', function (data) {
  response.innerText = data.message;
});
