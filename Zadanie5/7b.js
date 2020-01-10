var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

app.set('view engine', 'pug');
app.use(express.json());

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

    res.render('formdata', { firstname: firstname, surname: surname, city: city });
});

router.post('/jsondata', function (req, res) {
    console.log(req.body);
    res.render('formdata', { firstname: req.body.firstname, surname: req.body.surname, city: req.body.city });
});

app.use('/', router);
var server = app.listen(3002, function () { });
