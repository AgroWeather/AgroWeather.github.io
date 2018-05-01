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




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(upload.array())
app.use(cookieParser())
app.use(session({
	secret: "cookie_secret",
	resave: false,
	saveUninitialized: false,
	secure: false,
	maxAge: null 
}))


app.use(helmet())
app.use(express.static('./public'))

app.set('view engine', 'pug')

app.get('/', checkSignIn, (req, res) => {
	res.render('index')
})

var Users = [{
	email: 'jorgelserve@icloud.com',
	password: '1710jo'
}]

app.post('/signin', (req, res) => {
	if(!req.body.email || !req.body.password) {
		res.send("Invalid details!")
	} else {
		Users.filter(function(user) {
			if(user.email === req.body.email) {
				res.send({res: 'User Already exists'})
				// res.send('signup', {
				// 	message: "User Already Exists! Login or choose another user id"
				// })
			}
		})
		
		Users.push({
			email: req.body.email,
			password: req.body.password
		})

		req.session.user = {
			email: req.body.email,
			password: req.body.password
		}

		res.redirect('/')
	}
	res.end()
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



function checkSignIn(req, res, next){
	if(req.session.user){
		next();     //If session exists, proceed to page
	} else {
		var err = new Error("Not logged in!");
		console.log(req.session.user);
		next(err);  //Error, trying to access unauthorized page!
	}
}