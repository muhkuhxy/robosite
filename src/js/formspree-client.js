
import axios from 'axios'
import {decode} from './decode'
import 'es6-promise'
import URLSearchParams from 'url-search-params'

function urlify (data) {
  var urlEncoded = new URLSearchParams()
  Object.keys(data).forEach(function (key) {
    urlEncoded.append(key, data[key])
  })
  return urlEncoded
}

function sendTestMode (opts) {
  return new Promise(function (resolve, reject) {
    'timeout' in opts || (
      opts.timeout = 5000
    )
    window.setTimeout(function () {
      if (opts.success) {
        resolve()
      } else {
        reject(new Error('testMode fail'))
      }
    }, opts.timeout)
  })
}

// testMode: { success: boolean, timeout: int (5000) }
function send (address, data, testMode) {
  if (testMode) {
    return sendTestMode(testMode)
  }
  var payload = urlify(data)
  return axios.create({
    baseURL: 'https://formspree.io/',
    timeout: 10000,
    headers: {
      Accept: 'application/json'
    }
  }).post(decode(address), payload)
}

export default send
