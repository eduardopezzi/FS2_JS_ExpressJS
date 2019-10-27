try{
	const express = require('express')
	const appServer = express()
	const bodyParser = require('body-parser')
	const port = 80

	appServer.use(express.static('./public'))
	appServer.use(bodyParser.json());

	appServer.get('/', (req, res) => res.send('index.html'))

	appServer.post('/login', (req, res, next) => {
		if(req.body.username == "ed" && req.body.password == "123") {
			console.log("logged in");

		}
	})
	appServer.use(function (req, res, next) {
		res.status(404).send("File Not Found!!");
	})


	appServer.listen(port, () => console.log(`Ok on port ${port}`))
}catch{
	console.log(1)
	console.error("Hey There is an error here :\n "+error)
  }