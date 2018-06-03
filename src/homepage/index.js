const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const header = require('../header')
const card = require('./card')

page('/', header, loadData,(ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(yo`<div>

	</div>`)
	
})


async function loadData(ctx, next) {
	try {
		ctx.data = await fetch('./api/sensors', {method: 'POST'}).then(res => res.json())
		console.log(ctx.data)
		next()
	} catch (err) {
		return console.error(err)
	}
	next()
}
