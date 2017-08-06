import { $ } from './dom-utils'

var showMenu = $('#show-menu')

function closeMenu () {
  if (showMenu.checked) {
    showMenu.checked = false
  }
  document.body.removeEventListener('click', closeMenu)
}

function bind () {
  showMenu.addEventListener('change', function (e) {
    if (e.target.checked) {
      window.setTimeout(function () {
        document.body.addEventListener('click', closeMenu)
      })
    } else {
      document.body.removeEventListener('click', closeMenu)
    }
  })
  $('.navbar__burger').addEventListener('click', function (e) {
    e.stopPropagation() // prevent double toggle (click label -> change, bubble to body -> change again)
  })
}

export {
  bind
}
