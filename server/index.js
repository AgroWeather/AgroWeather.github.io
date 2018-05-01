const express = require('express')
const helmet = require('helmet')
const pug = require('pug')
const session = require('cookie-session');

const app = express()

app.disable('x-powered-by')

app.use(helmet())
app.use(express.static('./public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/signin', (req, res) => {
	res.render('index')
})

app.get('/saludo', (req, res) => {
	res.send('hola mundo\n')
})

app.get('/api', (req, res) => {
	res.send({nombre: 'jorge'})
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listening in port ${port}\n\t\x1b[36mhttp://localhost:${port} \x1b[0m`))