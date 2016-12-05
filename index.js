(function() {
  'use strict';

  var stop_button = document.getElementById('stopButton')
  stop_button.addEventListener('click', function (event) {
    var stop_light = document.getElementById('stopLight')
    stop_light.classList.toggle('stop')
  })
})();
