import { $ } from './dom-utils'

var nav = $('.navbar__items')

function toggleMenu (e) {
  console.log('called')
  if (nav.classList.contains('closed')) {
    nav.classList.remove('closed')
    document.body.addEventListener('click', toggleMenu)
  } else {
    nav.classList.add('closed')
    document.body.removeEventListener('click', toggleMenu)
  }
  e.stopPropagation()
}

function bind () {
  $('.navbar__burger').addEventListener('click', toggleMenu)
}

export {
  bind
}
