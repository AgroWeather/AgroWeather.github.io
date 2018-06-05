const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')

module.exports = function (ctx, next) {
	empty(document.getElementById('header-container')).appendChild(yo`<nav>
		<div class="nav-wrapper">
			<a href="#" class="brand-logo">AGRWEATHER</a>
		</div>
	</nav>`)
	next()
}