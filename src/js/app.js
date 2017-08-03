import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'
import * as menu from './menu'
import { $ } from './dom-utils'

document.body.classList.remove('no-js')

// var img = $('.header__image img')
// function focalize () {
//   return
//   var ratio = window.innerWidth / (window.innerHeight * 0.6)
//   console.log(ratio)
//   var margin = ratio * 10
//   console.log('ratio * 85px = ' + margin)
//   img.style.marginTop = -margin + '%'
// }
// window.addEventListener('resize', function () {
//   window.requestAnimationFrame(focalize)
// })
// window.requestAnimationFrame(focalize)

decodeAll()
contact.bind()
menu.bind()
