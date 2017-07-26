
function production () {
  return process.env.NODE_ENV === 'production'
}

export {
  production
}
