const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const header = require('../header')
const card = require('./card')

page('/', header, loadData,(ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(yo`<div>
		${card()}
	</div>`)
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: ["January", "February", "March", "April", "May", "June", "July"],
	        datasets: [{
	            label: "My First dataset",
	            borderColor: 'rgb(255, 99, 132)',
	            data: [0, 10, 5, 2, 20, 30, 45],
	        },
	        {
	            label: "My First dataset",
	            borderColor: 'rgb(255, 9, 132)',
	            data: [1, 30, 35, 32, 20, 30, 45],
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});
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
