
function hide (element) {
  style(element, 'display', 'none')
}

function show (element) {
  style(element, 'display', 'block')
}

function style (element, attr, value) {
  queryAndDo(element, 'style', function (element) {
    element.style[attr] = value
  })
}

function disable (query) {
  toggle(query, 'disabled', true, 'disabled')
}

function enable (query) {
  toggle(query, 'disabled', false, 'disabled')
}

function toggle (query, attr, value, styleClass) {
  queryAndDo(query, attr, function (element) {
    element[attr] = value
    if (styleClass) {
      var op = value ? 'add' : 'remove'
      element.classList[op](styleClass)
    }
  })
}

function queryAndDo (query, attr, action) {
  function andDo (element) {
    if (attr in element) {
      action(element)
    }
  }
  if (typeof query === 'string') {
    document.querySelectorAll(query).forEach(andDo)
  } else if (query != null) {
    andDo(query)
  }
}

export {
  hide,
  show,
  disable,
  enable
}
