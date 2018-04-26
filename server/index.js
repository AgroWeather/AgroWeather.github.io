const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use('/node_modules/materialize-css/sass/components/*', express.static('./node_modules/materialize-css/sass/components/*'))

var port = process.env.PORT || 3000

app.listen(port, console.log(`listening in port ${port}`))