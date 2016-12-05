(function() {
  'use strict';

  function log_was_entered(event) {
    console.log(`Entered ${this.textContent} button`)
  }

  function log_was_left(event) {
    console.log(`Left ${this.textContent} button`)
  }

  var buttons = ['stop', 'slow', 'go']
  buttons.forEach(function(type) {
    // NOTE: change_light depends on the local variable `type` and so cannot be
    // lifted out of the forEach() unless we use a closure
    function change_light(event) {
      var light = document.querySelector(`#${type}Light`)
      light.classList.toggle(type)
    }

    var button = document.querySelector(`#${type}Button`)
    button.addEventListener('click', change_light)
    button.addEventListener('mouseenter', log_was_entered)
    button.addEventListener('mouseleave', log_was_left)
  })

  function is_button(element) {
    return (element && element.classList.contains('button'))
  }

  function is_light_on(light_type) {
    return document.querySelector(`#${light_type}Light`)
      .classList.contains(light_type)
  }

  var controls = document.querySelector('#controls')
  controls.addEventListener('click', function (event) {
    var button = event.target
    if (is_button(button)) {
      var text = button.textContent
      console.log(`${text} bulb ${is_light_on(text.toLowerCase()) ? 'on' : 'off'}`)
    }
  })
})();
