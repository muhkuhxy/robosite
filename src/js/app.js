
import base64 from 'base64'

function decode (element) {
  const value = base64.atob(element.innerText)
  element.innerText = value
  if (element.tagName.toLowerCase() === 'a') {
    element.href = 'mailto:' + value
  }
}

document.querySelectorAll('.obfuscated').forEach(decode)
