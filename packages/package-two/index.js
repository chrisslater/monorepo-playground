const add = require('package-three').add
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send(`Hello World! ${add(1 + 4)}`)
})

app.listen(3000, function () {
	console.log('package two express app listening on port 3101!')
})