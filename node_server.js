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
            "address": "Hoża 20",
            "age": 30,
            "description": "Miłośnik sportów ekstremalnych. Lubi spędzać czas ze swoją rodziną. Pracuje jako lekarz w jednej z przychodni",
            "life_goals": [
                "test"
            ]
        },
        {
            "firstname": "Mirosław",
            "surname": "Agawski",
            "city": "Szczecin",
            "postcode": "10-020",
            "address": "Trybunalska 31",
            "age": 31,
            "description": "",
            "life_goals": [
                
            ]
        },
        {
            "firstname": "Tomasz",
            "surname": "Król",
            "city": "Gdańsk",
            "postcode": "11-022",
            "address": "Główna 1",
            "age": 32,
            "description": "",
            "life_goals": [
                
            ]
        },
        {
            "firstname": "Agata",
            "surname": "Kowalska",
            "city": "Warszawa",
            "postcode": "00-100",
            "address": "Hoża 25",
            "age": 33,
            "description": "",
            "life_goals": [
                
            ]
        },
    ]

    personID = parseInt(req.params.personID)
    if (personID > person_list.length || personID <= 0) {
        res.status(404).send('Person not found');
     }

    res.json(person_list[personID - 1]);
});

var server = app.listen(3000, function () { });
