import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'
import * as menu from './menu'

document.body.classList.remove('no-js')

decodeAll()
contact.bind()
menu.bind()
