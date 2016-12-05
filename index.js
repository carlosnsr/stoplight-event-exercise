(function() {
  'use strict';

  var stop_button = document.querySelector('#stopButton')
  stop_button.addEventListener('click', function (event) {
    var stop_light = document.querySelector('#stopLight')
    stop_light.classList.toggle('stop')
  })
  stop_button.addEventListener('mouseenter', function (event) {
    console.log(`Entered ${this.textContent} button`)
  })
  stop_button.addEventListener('mouseleave', function (event) {
    console.log(`Left ${this.textContent} button`)
  })

  var slow_button = document.querySelector('#slowButton')
  slow_button.addEventListener('click', function (event) {
    var slow_light = document.querySelector('#slowLight')
    slow_light.classList.toggle('slow')
  })
  slow_button.addEventListener('mouseenter', function (event) {
    console.log(`Entered ${this.textContent} button`)
  })
  slow_button.addEventListener('mouseleave', function (event) {
    console.log(`Left ${this.textContent} button`)
  })

  var go_button = document.querySelector('#goButton')
  go_button.addEventListener('click', function (event) {
    var go_light = document.querySelector('#goLight')
    go_light.classList.toggle('go')
  })
  go_button.addEventListener('mouseenter', function (event) {
    console.log(`Entered ${this.textContent} button`)
  })
  go_button.addEventListener('mouseleave', function (event) {
    console.log(`Left ${this.textContent} button`)
  })
})();
