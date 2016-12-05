(function() {
  'use strict';

  const button_types = ['stop', 'slow', 'go']
  button_types.forEach(function(type) {
    const button = document.querySelector(`#${type}Button`)
    button.addEventListener('click', change_light)
    button.addEventListener('mouseenter', log_was_entered)
    button.addEventListener('mouseleave', log_was_left)

    // NOTE: change_light depends on the local variable `type` and so cannot be
    // lifted out of the forEach() unless we use a closure
    function change_light(event) {
      get_light(type).classList.toggle(type)
    }
  })

  function get_light(type) {
    return document.querySelector(`#${type}Light`)
  }

  function log_was_entered(event) {
    console.log(`Entered ${this.textContent} button`)
  }

  function log_was_left(event) {
    console.log(`Left ${this.textContent} button`)
  }

  const controls = document.querySelector('#controls')
  controls.addEventListener('click', function (event) {
    if (is_button(event.target)) {
      const text = event.target.textContent
      console.log(`${text} bulb ${is_light_on(text.toLowerCase()) ? 'on' : 'off'}`)
    }
  })

  function is_button(element) {
    return (element && element.classList.contains('button'))
  }

  function is_light_on(type) {
    return get_light(type).classList.contains(type)
  }
})();
