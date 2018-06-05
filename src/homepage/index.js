const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const moment = require('moment')
const header = require('../header')
const card = require('./card')
require('chart.js')

moment.defineLocale('es', null)

page('/', header, loadData,(ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(yo`<div>
		${card(ctx.data)}
	</div>`)
	ctx.data.map((element) => {
		new Chart(document.getElementById(`${element.sensor}Chart`).getContext('2d'), {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
				labels: Array.from(element.data, x => moment().startOf(x.timestamp).fromNow()),
				datasets: [{
					label: element.sensor,
					borderColor: 'rgb(255, 99, 132)',
					data: Array.from(element.data, x => x.value)
				}]
			},

			// Configuration options go here
			options: {}
		})
	})
	
	
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
