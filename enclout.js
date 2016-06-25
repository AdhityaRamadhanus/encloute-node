'use strict'
var curryJs = require('curryjs')
var request = require('request')
var urlHelper = require('./helper/encloutHelper')

function genericApiCall (authKey, urlBuilder, text) {
  var url = urlBuilder(text, authKey)
  //console.log(url)
  var promise = new Promise(function (resolve, reject) {
    request(url, function (err, resp, body) {
      if (err){
        reject(new Error(err.message))
      }
      else if (resp.status == 404 || resp.status == 503 || resp.status == 500){
        reject(new Error('Status Code not 200'))
      }
      else resolve(JSON.parse(body))
    })
  })
  return promise
}

module.exports = function (authKey) {
  return {
    stemming: curryJs(genericApiCall)(authKey)(urlHelper.buildStemUrl),
    termAnalysis: curryJs(genericApiCall)(authKey)(urlHelper.buildTermUrl)
  }
}
