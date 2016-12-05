(function() {
  'use strict';

  var stop_button = document.getElementById('stopButton')
  stop_button.addEventListener('click', function (event) {
    var stop_light = document.getElementById('stopLight')
    stop_light.classList.toggle('stop')
  })

  var slow_button = document.getElementById('slowButton')
  slow_button.addEventListener('click', function (event) {
    var slow_light = document.getElementById('slowLight')
    slow_light.classList.toggle('slow')
  })

  var go_button = document.getElementById('goButton')
  go_button.addEventListener('click', function (event) {
    var go_light = document.getElementById('goLight')
    go_light.classList.toggle('go')
  })
})();
