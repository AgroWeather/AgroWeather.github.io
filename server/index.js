const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const helmet = require('helmet')
const pug = require('pug')


const upload = multer()
const app = express()

app.disable('x-powered-by')

app.use(helmet())
app.use(express.static('./public'))

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array())
// app.use(cookieParser())
// app.use(session({
// 	secret: "cookie_secret",
// 	resave: false,
// 	saveUninitialized: false,
// 	secure: false,
// 	maxAge: null
// }))
var station = [
	{
		sensor: "Humendad",
		data: [
			{
				value: 35,
				timestamp: new Date("2012-06-03T12:00:00Z")
			},
			{
				value: 34,
				timestamp: new Date("2018-06-03T13:00:00Z")
			},
			{
				value: 31,
				timestamp: new Date("2018-06-03T14:00:00Z")
			}
		]
	},
	{
		sensor: "Temperatura",
		data: [
			{
				value: 18,
				timestamp: new Date("2018-06-03T12:00:00Z")
			},
			{
				value: 20,
				timestamp: new Date("2018-06-03T13:00:00Z")
			},
			{
				value: 25,
				timestamp: new Date("2018-06-03T14:00:00Z")
			}
		]
	}
]


app.get('/', (req, res) => {
	res.render('index')
})

app.post('/last/:sensor', (req, res) => {
	if (req.params.sensor == 'humedad') {
		res.send(station[0].data)
	} else {
		res.send(station[1].data)
	}
})

app.post('/adddata', (req, res) => {
	console.log('Agregado')
	if (req.headers.humedad) {
		station[0].data.push({
			value: parseInt(req.headers.humedad),
			timestamp: new Date
		})
		res.end('agregado')
	} else {
		station[1].data.push({
			value: parseInt(req.headers.temperatura),
			timestamp: new Date
		})
		res.end('agregado')
	}
})

app.get('/saludo', (req, res) => {
	res.send('hola mundo\n')
})

app.post('/api/sensors', (req, res) => {
	res.send(station)
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listening in port ${port}\n\t\x1b[36mhttp://localhost:${port} \x1b[0m`))
