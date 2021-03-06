const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const moment = require('moment')
const header = require('../header')
const card = require('./card')
require('chart.js')
var chart = []
var control = 0
moment.defineLocale('es', null)

page('/', header, loadData,(ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(yo`<div>
		${card(ctx.data)}
	</div>`)
	ctx.data.map((element) => {
		chart[control] = new Chart(document.getElementById(`${element.sensor}Chart`).getContext('2d'), {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
				labels: Array.from(element.data, x => moment(x.timestamp).startOf().fromNow()),
				datasets: [{
					label: element.sensor,
					borderColor: 'rgb(255, 99, 132)',
					data: Array.from(element.data, x => x.value)
				}]
			},

			// Configuration options go here
			options: {}
		})
		control++
	})
	console.log(chart)
	
	setInterval(() => {
		actualizarTemperatura()
		actualizarHumedad()
	}, 2000)
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

async function actualizarTemperatura() {
	try {
		var res = await fetch('./last/temperatura', {method: 'POST'}).then(res => res.json())
		addData(chart[1], res)
	} catch (err) {
		return console.error(err)
	}
}

async function actualizarHumedad() {
	try {
		var res = await fetch('./last/humedad', {method: 'POST'}).then(res => res.json())
		addData(chart[0], res)
	} catch (err) {
		return console.error(err)
	}
}


function addData(chart, data) {
	chart.data.labels = Array.from(data, x => moment(x.timestamp).startOf().fromNow())
	chart.data.datasets.data = Array.from(data, x => x.value)
	setTimeout(() => chart.update(), 500)
}



