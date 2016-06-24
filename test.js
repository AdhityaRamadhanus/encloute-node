'use strict'
var encloutApi = require('./enclout')('4Xq97MyiuCxs6nPFWRnv')
encloutApi.getStem('Fish in the world').then(console.log)
/*{ text: 'Fish in the world',
  porter_stem: 'Fish in the world',
  uea_stem: 'Fish in the world',
  snowball_stem: 'Fish in the world' }*/
