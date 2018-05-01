const page = require('page')

require('../node_modules/hammerjs/hammer.min.js')
require('../node_modules/materialize-css/dist/js/materialize.js')
require('babel-polyfill')

require('./homepage')
require('./signin')

page()

