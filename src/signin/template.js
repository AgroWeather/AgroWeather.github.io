const empty = require('empty-element')
const yo = require('yo-yo')

module.exports = yo`<div class="container">
	<div class="col s12 m7">
		<div class="row signup-box">
			<h1 class="agroweather hide-on-small-only">AGROWEATHER</h1>
			<h4 class="agroweather hide-on-med-and-up">AGROWEATHER</h4>
			<form id="form" onsubmit="${onsubmit}">
				<div class="input-field col s12 m6 offset-m3 l6 offset-l3">
					<input id="email" type="email" name="email" class="validate"/>
					<label for="email">Email</label>
				</div>
				<div class="input-field col s12 m6 offset-m3 l6 offset-l3">
					<input id="password" type="password" name="password" class="validate"/>
					<label for="password">Password</label>
				</div>
				<button id="submit" type="submit" name="action" class="btn waves-effect waves-light blue col s12 m6 offset-m3 l6 offset-l3">
					<t id="text">Iniciar sesión</t><i class="material-icons right">send</i>
				</button>
			</form>
		</div>
	</div>
</div>`


async function onsubmit(ev) {
	ev.preventDefault()
	console.log(ev.target)
	let header = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store, no-cache, must-revalidate'
		},
		method: "POST",
		body: JSON.stringify({
				email: document.getElementById('email').value,
				password: document.getElementById('password').value,
			})
	}

	try {
		let request = await fetch('/signin', header).then(res => res.json())
		if (request.type == 'error') {
			console.log(request.message)
			document.getElementById('form')[1].value = ''
			document.getElementById('text').innerText = request.message
			document.getElementById('submit').classList.toggle('blue')
			document.getElementById('submit').classList.add('red')
			setTimeout(() => {
				document.getElementById('text').innerText = 'Iniciar sesión'
				document.getElementById('submit').classList.toggle('blue')
			}, 2000)
		}
	} catch (err) {
		console.log(err)
	}
}
