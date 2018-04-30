const express = require('express')
const helmet = require('helmet')
const session = require('cookie-session');

const app = express()

app.disable('x-powered-by')

var expiryDate = new Date( Date.now() + 30000 ); // 1 hour
app.use(session({
	name: 'session',
	keys: ['key1', 'key2'],
	cookie: 
		{
			secure: false,
			httpOnly: false,
			domain: 'localhost:3000',
			path: '/api',
			expires: expiryDate
		}
	})
);

app.use(helmet())
app.use(express.static('./public'))
app.use('/node_modules/materialize-css/sass/components/*', express.static('./node_modules/materialize-css/sass/components/*'))

app.get('/saludo', function (req, res) {
	res.send('hola mundo\n')
})

app.get('/api', function (req, res) {
	res.send({nombre: 'jorge'})
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listening in port ${port}\n\t\x1b[36mhttp://localhost:${port} \x1b[0m`))