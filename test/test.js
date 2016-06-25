'use strict'
var describe = require('mocha').describe
var it = require('mocha').it
var assert = require('chai').assert

describe('Enclout Language Api', function (){
  it('Can Stem "Fishing in the world"', function () {
    var encloutApi = require('../enclout')('4Xq97MyiuCxs6nPFWRnv')
    return encloutApi.stemming('Fishing in the world').then(function (result) {
      assert.equal(result.porter_stem, 'Fish in the world')
      assert.equal(result.text, 'Fishing in the world')
    })
  })
  it('Can Termn Analysis "Fishing in the world"', function () {
    var encloutApi = require('../enclout')('4Xq97MyiuCxs6nPFWRnv')
    return encloutApi.termAnalysis('Fishing in the world').then(function (result) {
      assert.equal(result.lemma_text, ' fish in the world')
      assert.equal(result.text, 'Fishing in the world')
    })
  })
})
