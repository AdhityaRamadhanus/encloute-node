'use strict'
var baseStemUrl = 'https://www.enclout.com/api/v1/stemmer/show.json'
var baseTermUrl = 'https://www.enclout.com/api/v1/term/show.json'
module.exports.buildStemUrl = function (text, authKey) {
  return baseStemUrl + '?auth_token=' + authKey+ '&text=' + text
}
module.exports.buildTermUrl = function (text, authKey) {
  return baseTermUrl + '?auth_token=' + authKey+ '&text=' + text
}
