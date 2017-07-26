import base64 from 'base64'
import { $$ } from './dom-utils'

function decode (text) {
  return base64.atob(text)
}

function decodeElement (element) {
  var value = decode(element.textContent)
  element.textContent = value
  if (element.tagName.toLowerCase() === 'a') {
    element.href = 'mailto:' + value
  }
}

function decodeAll () {
  $$('.obfuscated').forEach(decodeElement)
}

export {
  decode,
  decodeAll
}
