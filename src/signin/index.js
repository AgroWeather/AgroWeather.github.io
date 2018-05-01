const empty = require('empty-element')
const page = require('page')
const yo = require('yo-yo')
const template = require('./template')
const header = require('../header')

page('/signin', (ctx, next) => {
	empty(document.getElementById('main-container')).appendChild(template)
	$(document).ready(function() {
		Materialize.updateTextFields()
	})
	next()
})