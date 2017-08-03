import { $ } from './dom-utils'

var showMenu = $('#show-menu')

function closeMenu () {
  if (showMenu.checked) {
    showMenu.checked = false
  }
}

function bind () {
  showMenu.addEventListener('change', function (e) {
    if (e.target.checked) {
      document.body.addEventListener('click', closeMenu, { once: true })
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
