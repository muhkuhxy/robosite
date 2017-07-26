import {decodeAll} from './decode'
import * as contact from './contact'
import './polyfills'

document.body.classList.remove('no-js')

decodeAll()
contact.bind()
