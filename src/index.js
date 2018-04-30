require('../node_modules/hammerjs/hammer.min.js')

require('../node_modules/materialize-css/dist/js/materialize.js')

require('babel-polyfill')
require('./header')
require('./homepage')


async function call() {
	try {
		var pictures = await fetch('/api').then(res => res.json())
		console.log(pictures)
	} catch (err) {
		return console.log(err)
	}
}

call()