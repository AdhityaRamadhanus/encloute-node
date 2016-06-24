'use strict'
var baseStemUrl = 'https://www.enclout.com/api/v1/stemmer/show.json'
module.exports.buildStemUrl = function (text, authKey) {
  return baseStemUrl + '?auth_token=' + authKey+ '&text=' + text
}
