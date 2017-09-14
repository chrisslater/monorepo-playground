const express = require('express')
const axios = require('axios')
const app = express()

class RestClient {
	constructor(client) {
		this._client = client
	}

	async get(uri) {
		return await this._client.get(uri)
	}
}

const client = new RestClient(axios)

app.get('/', async function (req, res) {
	try {
		const result = await client.get('http://package_two:3000')
		const calc = result.data.calc
		res.send(`Result is: ${calc}`)
	} catch(e) {
		console.log('call error:', e)
	}
})

app.listen(3000, function () {
	console.log('package-one express app listening on port 3100!')
})