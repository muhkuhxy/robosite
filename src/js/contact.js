import send from './formspree-client'
import {$, $$, hide, show, disable, enable} from './utils'

var technicalError = 'Leider konnte Ihre Nachricht nicht übermittelt werden. Bitte versuchen Sie es später erneut. Oder nutzen Sie eine der anderen Kontaktmöglichkeiten am Ende der Seite.'

function ok (button) {
  return function () {
    enable(button)
    show('.contactform__success')
  }
}

function fail (msg, button) {
  return function (error) {
    console.log(error)
    var p = $('.contactform__failure')
    p.innerText = msg
    show(p)
    enable(button)
  }
}

function failFast (msg) {
  fail(msg)()
}

function validate (elements) {
  return elements.name.value && elements.msg.value
}

function submit () {
  hide('.contactform__success, .contactform__failure')
  var elements = document.forms.contact.elements
  if (!validate(elements)) {
    failFast('Bitte geben Sie Ihren Namen und eine Nachricht ein.')
  } else {
    var button = $('.contactform__button')
    disable(button)
    send(elements.address.value, {
      Name: elements.name.value,
      Nachricht: elements.msg.value,
      _subject: 'Neue Nachricht vom Kontaktformular'
    })
      .then(ok(button))
      .catch(fail(technicalError, button))
  }
}

function bind () {
  show(document.forms.contact)
  $$('.contactform__button').forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault()
      submit()
    })
  })
}

export {
  bind
}
