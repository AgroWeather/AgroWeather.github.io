const empty = require('empty-element')
const card = require('./card')
const yo = require('yo-yo')


empty(document.getElementById('main-container')).appendChild(yo`<div>
	${card}
</div>`)