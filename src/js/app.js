import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'
import { $ } from './dom-utils'

document.body.classList.remove('no-js')

var nav = $('.navbar__items')
$('.navbar__burger').addEventListener('click', function () {
  if (nav.classList.contains('closed')) {
    nav.classList.remove('closed')
  } else {
    nav.classList.add('closed')
  }
})

decodeAll()
contact.bind()
