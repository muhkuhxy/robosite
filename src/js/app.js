import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'
import * as menu from './menu'

document.body.classList.remove('no-js')
document.body.classList.add('loaded')

decodeAll()
contact.bind()
menu.bind()
