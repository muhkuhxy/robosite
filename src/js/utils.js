
function production () {
  return process.env.NODE_ENV === 'production'
}

function debug (s) {
  if (!production()) {
    console.log(s)
  }
}

export {
  production,
  debug
}
