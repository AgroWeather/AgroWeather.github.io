const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const header = require('../header')
const card = require('./card')

page('/', header, (ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(yo`<div>
		${card}
	</div>`)
	
	async function call() {
		try {
			var pictures = await fetch('/api').then(res => res.json())
			console.log(pictures)
		} catch (err) {
			return console.log(err)
		}
	}

	call()
})

