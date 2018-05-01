const empty = require('empty-element')
const yo = require('yo-yo')

module.exports = yo`<div class="container">

	<div class="col s12 m7">
		<div class="row signup-box">

			<h1 class="agroweather hide-on-small-only">AGROWEATHER</h1>
			<h4 class="agroweather hide-on-med-and-up">AGROWEATHER</h4>
			<form onsubmit=${onsubmit}>
				<div class="input-field col s12 m6 offset-m3 l6 offset-l3">
					<input id="email" type="email" class="validate" name="email">
					<label for="email">Email</label>
				</div>
				<div class="input-field col s12 m6 offset-m3 l6 offset-l3">
					<input id="password" type="password" class="validate" name="password">
					<label for="password">Password</label>
				</div>
				<button type="submit" name="action" class="btn waves-effect waves-light blue col s12 m6 offset-m3 l6 offset-l3">Iniciar sesión
					<i class="material-icons right">send</i>
				</button>
			</form>
		</div>
	</div>
</div>`


async function onsubmit(ev) {
	ev.preventDefault()

	let header = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({
				email: document.getElementById('email').value,
				password: document.getElementById('password').value,
			})
	}

	try {
		var user = await fetch('/signin', header).then(res => res.json())
	} catch (err) {
		console.log(err)
	}
	console.log(user)
	// console.log(ev)
}
