module.exports = function(app,express)
{
var ConexionBD = require('../models/ConexionBD.js');
	
var router=express.Router();

app.use(router);

ConexionBD.createTables();

router.route('/SignIn')
.post(ConexionBD.singin)

router.route('/LogIn')
.post(ConexionBD.login)


router.route('/List')
.post(ConexionBD.listItems)

router.route('/ListDrawers')
.post(ConexionBD.listDrawers)

router.route('/newProduct')
.post(ConexionBD.newProduct);

router.route('/delete')
.post(ConexionBD.deleteProduct);

router.route('/Add-Quit')
}