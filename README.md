[![Build Status](https://travis-ci.org/AdhityaRamadhanus/curryjs.svg?branch=master)](https://travis-ci.org/AdhityaRamadhanus/curryjs)

<h1>Enclout-Node</h1>

<p>
  <a href="#installation">Installation</a> |
  <a href="#usage">Usage</a> |
  <a href="#license">License</a>
  <br><br>
  <blockquote>
  Enclout Language Api (<a href="https://www.enclout.com/">https://www.enclout.com</a>) module for nodejs
  </blockquote>
</p>

Installation
------------

`to be added soon`

Usage
-----

```js
var encloutApi = require('enclout-node')
// Yes we return promises (y)
encloutApi.stemming('Fishing in the world').then(console.log).catch(function (err) {
  console.log('Got Error , ' + err)
})
/*{ text: 'Fish in the world',
  porter_stem: 'Fish in the world',
  uea_stem: 'Fish in the world',
  snowball_stem: 'Fish in the world' }*/
encloutApi.termAnalysis('Fishing in the world').then(console.log).catch(function (err) {
  console.log('Got Error , ' + err)
})

/*{ text: 'Fishing in the world',
  lemma_text: ' fish in the world' }*/
```

License
----

MIT © [Adhitya Ramadhanus]
