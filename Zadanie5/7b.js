var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

app.set('view engine', 'pug');

router.get('/hello', function (req, res) {
    res.send('hello world');
});

router.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname + '/form.html'));
});

router.get('/formdata', function (req, res) {
    var firstname = req.query.firstname;
    var surname = req.query.surname;
    var city = req.query.city;

    console.log(firstname);
    console.log(surname);
    console.log(city);
    res.render('formdata', { firstname: firstname, surname: surname, city: city });
});

app.use('/', router);
var server = app.listen(3002, function () { });
