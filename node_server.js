var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/TIN';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/person/init', function (req, res) {


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
                "Wybudować dom",
                "Zwiedzić USA",
                "Napisać własną książke o życiu lekarza"
            ]
        },
        {
            "firstname": "Mirosław",
            "surname": "Agawski",
            "city": "Szczecin",
            "postcode": "10-020",
            "address": "Trybunalska 31",
            "age": 31,
            "description": "Lorem ipsum dolor sit amet",
            "life_goals": [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet"
            ]
        },
        {
            "firstname": "Tomasz",
            "surname": "Król",
            "city": "Gdańsk",
            "postcode": "11-022",
            "address": "Główna 1",
            "age": 32,
            "description": "Lorem ipsum dolor sit amet",
            "life_goals": [
                "Lorem ipsum dolor sit amet"
            ]
        },
        {
            "firstname": "Agata",
            "surname": "Kowalska",
            "city": "Warszawa",
            "postcode": "00-100",
            "address": "Hoża 25",
            "age": 33,
            "description": "Lorem ipsum dolor sit amet",
            "life_goals": [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ]
        },
    ]

    MongoClient.connect(url, function(err, db) {
    
        db.collection('person').insertMany(person_list);
    
    }); 

    res.json(person_list);
});

app.get('/person/:personID', function (req, res) {

if (!ObjectId.isValid(req.params.personID)){
    res.status(400).send('PersonID not valid');
}

    MongoClient.connect(url, function(err, db) {

        var person = db.collection('person').findOne({_id: ObjectId(req.params.personID)});
        console.log(person);
        res.json(person);

    }); 
});

var server = app.listen(3000, function () { });
