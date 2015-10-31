var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()


app.all('*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	 });

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www')));


//var conexionBD = require('./conexionBD.js')

require('./Routes/index.js')(app,express)

/*var router=express.Router();
app.use(router);

router.route('/').get(function(){console.log('abvd')})

router.route('/SignIn')

router.route('/LogIn')


router.route('/List')

router.route('/Add-Quit')*/



app.listen(process.argv[2])