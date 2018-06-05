const yo = require('yo-yo')

module.exports = function (data) {
	return yo`<div class="row">
		${data.map(element => {
			console.log(element.sensor)
			return yo`<div class="col s12 m6 l6">
				<div class="card">
					<div class="card-content">
						<span class="card-title">${element.sensor}</span>
						<canvas id="${element.sensor}Chart"></canvas>
					</div>
				</div>
			</div>`
		})}
		<canvas id="myChart"></canvas>
	</div>`
}