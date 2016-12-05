(function() {
  'use strict';

  var stop_button = document.querySelector('#stopButton')
  stop_button.addEventListener('click', function (event) {
    var stop_light = document.querySelector('#stopLight')
    stop_light.classList.toggle('stop')
  })

  var slow_button = document.querySelector('#slowButton')
  slow_button.addEventListener('click', function (event) {
    var slow_light = document.querySelector('#slowLight')
    slow_light.classList.toggle('slow')
  })

  var go_button = document.querySelector('#goButton')
  go_button.addEventListener('click', function (event) {
    var go_light = document.querySelector('#goLight')
    go_light.classList.toggle('go')
  })
})();
