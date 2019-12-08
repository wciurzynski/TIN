var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/person/:personID', function (req, res) {


    person_list = [
        {
            "firstname": "Jan",
            "surname": "Kowalski",
            "city": "Warszawa",
            "postcode": "00-000",
            "address": "Hoża 20"
        },
        {
            "firstname": "Mirosław",
            "surname": "Agawski",
            "city": "Szczecin",
            "postcode": "10-020",
            "address": "Trybunalska 31"
        },
        {
            "firstname": "Tomasz",
            "surname": "Król",
            "city": "Gdańsk",
            "postcode": "11-022",
            "address": "Główna 1"
        },
        {
            "firstname": "Agata",
            "surname": "Kowalska",
            "city": "Warszawa",
            "postcode": "00-100",
            "address": "Hoża 25"
        },
    ]

    personID = parseInt(req.params.personID)
    if (personID > person_list.length || personID <= 0) {
        res.status(404).send('Person not found');
     }

    res.json(person_list[personID - 1]);
});

var server = app.listen(3000, function () { });
