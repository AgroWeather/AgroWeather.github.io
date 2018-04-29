const express = require('express')
const helmet = require('helmet')
const app = express()

app.disable('x-powered-by')

app.use(helmet())
app.use(express.static('./public'))
app.use('/node_modules/materialize-css/sass/components/*', express.static('./node_modules/materialize-css/sass/components/*'))

app.get('/saludo', function (req, res) {
	res.send('hola mundo\n')
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listening in port ${port}\n\t\x1b[36mhttp://localhost:${port} \x1b[0m`))