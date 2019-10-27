try {
	const express = require('express')
	const appServer = express()
	const port = 999

	appServer.get('/', (req, res) => res.send('Hello World'))
	appServer.listen(port, () => console.log(`Ok on port ${port}`))

}
catch(error){
	 console.log(1)
	 console.error("Hey There is an error here :\n "+error)
};