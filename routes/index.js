var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demo Site' });
});



router.route('/testsql')
    .get(function(req, res, next) {

        connection();
        // connection.query("SELECT * FROM LpsyncPermission", function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result);
        // });

    });


module.exports = router;
