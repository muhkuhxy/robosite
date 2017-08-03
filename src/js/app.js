import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'
import { $ } from './dom-utils'

document.body.classList.remove('no-js')

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
$('.navbar__burger').addEventListener('click', toggleMenu)

decodeAll()
contact.bind()
