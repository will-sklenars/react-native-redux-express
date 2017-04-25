var express = require('express')
var drinks = require('./drinks')
 
var app = express()
 
app.get('/drinks', function(req, res) {
  res.json(drinks)
})
 
app.listen(3000)