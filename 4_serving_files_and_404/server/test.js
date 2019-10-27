try{ 
 var express = require("express");
  var bodyParser = require("body-parser");
  var app = express();
  var port = 80;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static('./public'))
	app.get('/', (req, res) => res.send('index.html'))
  // app.get('/',function(req,res){
  //   res.sendfile("index.html");
  // });
  app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    if(user_name == "ed" && password =="123") {
      console.log("logged in")
      res.on('login ok', (d) => process.stdout.write(d))
    }else 
      console.log('Not authorized')
      
    res.end("yes");
  });
  app.listen(port,function(){
    console.log(`Ok on port ${port}`)
  })

}catch{
  console.log(1)
  console.error("Hey There is an error here :\n "+error)
}