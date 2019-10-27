try {
	const express = require('express')
	const appServer = express()
	const port = 80

	appServer.use(express.static('public'))


	appServer.listen(port, () => console.log(`Ok on port ${port}`));

} // finish function try
catch(error){
	 console.log(1)
	 console.error("Hey There is an error here :\n "+error)
};