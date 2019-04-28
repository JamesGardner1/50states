var express = require('express')
var bodyParser = require('body-parser')
var states_api = require('./routes/states.js')

var app = express()

app.use(bodyParser.json())

app.use('/api', states_api)

// Error handling for routing or app errors
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

//Starts the server
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})