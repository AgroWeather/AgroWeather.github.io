const empty = require('empty-element')
const card = require('./card')
const yo = require('yo-yo')


empty(document.getElementById('main-container')).appendChild(yo`<div class="container">
	<div class="row">
		${card}
	</div>

	<div class="row">
		<div class="col s12">This div is 12-columns wide on all screen sizes</div>
		<div class="col s6">6-columns (one-half)</div>
		<div class="col s6">6-columns (one-half)</div>
	</div>

</div>`)