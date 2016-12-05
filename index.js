(function() {
  'use strict';

  var buttons = ['stop', 'slow', 'go']
  buttons.forEach(function(type) {
    var button = document.querySelector(`#${type}Button`)
    button.addEventListener('click', function change_light(event) {
      var light = document.querySelector(`#${type}Light`)
      light.classList.toggle(type)
    })

    button.addEventListener('mouseenter', function log_was_entered(event) {
      console.log(`Entered ${this.textContent} button`)
    })

    button.addEventListener('mouseleave', function log_was_left(event) {
      console.log(`Left ${this.textContent} button`)
    })
  })

  var controls = document.querySelector('#controls')
  controls.addEventListener('click', function (event) {
    function is_button(element) {
      return (element && element.classList.contains('button'))
    }

    function is_light_on(light_type) {
      return document.querySelector(`#${light_type}Light`)
        .classList.contains(light_type)
    }

    var button = event.target
    if (is_button(button)) {
      var text = button.textContent
      console.log(`${text} bulb ${is_light_on(text.toLowerCase()) ? 'on' : 'off'}`)
    }
  })
})();
