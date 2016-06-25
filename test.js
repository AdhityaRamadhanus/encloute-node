'use strict'
var encloutApi = require('./enclout')('4Xq97MyiuCxs6nPFWRnv')
encloutApi.stemming('Fishing in the world').then(console.log).catch(function (err) {
  console.log('Got Error , ' + err)
})
encloutApi.termAnalysis('Fishing in the world').then(console.log).catch(function (err) {
  console.log('Got Error , ' + err)
})
/*{ text: 'Fish in the world',
  porter_stem: 'Fish in the world',
  uea_stem: 'Fish in the world',
  snowball_stem: 'Fish in the world' }*/
/*{ text: 'Fishing in the world',
  lemma_text: ' fish in the world' }*/
