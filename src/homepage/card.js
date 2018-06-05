const yo = require('yo-yo')

module.exports = function (data) {
	return yo`<div class="row">
		${card}
	</div>`
}


/*function template(sersorData) {
	return yo``
}*/

var card = yo`<div class="col s12 m6 l6">
	<div class="card">
		<div class="card-content">
			<span class="card-title">Card Title</span>
      		<canvas id="myChart"></canvas>
		</div>
	</div>
</div>`