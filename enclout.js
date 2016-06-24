'use strict'
var curryJs = require('curryjs')
var request = require('request')
var urlHelper = require('./helper/encloutHelper')

function getStem (authKey, text) {
  var url = urlHelper.buildStemUrl(text, authKey)
  var promise = new Promise(function (resolve, reject) {
    request(url, function (err, resp, body) {
      if (err){
        reject(new Error(err.message))
      }
      else if (resp.status == 404 || resp.status == 503 || resp.status == 500){
        reject(new Error('Status Code not 200'))
      }
      resolve(JSON.parse(body))
    })
  })
  return promise
}
module.exports = function (authKey) {
  return {
    getStem : curryJs(getStem)(authKey)
  }
}
