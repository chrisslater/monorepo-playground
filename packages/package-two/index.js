const add = require('package-three').add
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	const calc = add(1, 4)
	res.send(`Hello World! ${calc}`)
})

app.listen(3000, function () {
	console.log('package two express app listening on port 3101!')
})