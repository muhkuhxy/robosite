import base64 from 'base64'
import { $$ } from './utils'

function decode (text) {
  return base64.atob(text)
}

function decodeElement (element) {
  const value = decode(element.innerText)
  element.innerText = value
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
