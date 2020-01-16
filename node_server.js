var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost/TIN';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/product/init', function (req, res) {


    person_list = [
        {
            "name": "T-shirt Biały",
            "image_url": "https://cdn.shoplo.com/0106/products/th2048/aaas/4674-0007-0011-tee.jpg",
            "category": "Bluzy",
            "description": "T-shirt z kolekcji PLNY x STADIUM™ w kolorze białym z surowo wykończonymi rękawami, kołnierzem i dołem. Uniwersalny element wielu stylizacji.<br> Mocno limitowany drop Stadium X Lecia to kolekcja przygotowana pod szyldem PLNY Merchtedes. Projekty inspirowane retrospekcyjnym albumem Tede & Sir Micha.",
            "price": 89.00,
            "size": [
                "S",
                "M",
                "L",
                "XL",
            ],
            "meterials": [
                "80% bawełna",
                "20% poliester"
            ]
        },
        {
            "name": "Bluza męska niebieska",
            "image_url": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
            "category": "Bluzy",
            "description": "Bluza męska niebieska wszystkie rozmiary",
            "price": 100,
            "size": [
                "S",
                "M",
                "L",
                "XL",
            ],
            "meterials": [
                "85% bawełna",
                "15% poliester"
            ]
        },
        {
            "name": "Spodnie damskie jeans",
            "image_url": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
            "category": "Spodnie",
            "description": "Spodnie damskie jeans wszystkie rozmiary",
            "price": 100,
            "size": [
                "S",
                "M",
                "L",
                "XL",
            ],
            "meterials": [
                "90% bawełna",
                "10% poliester"
            ]
        },
    ]

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, client) {
        if (err) {
            console.log(err);
            process.exit(0);
        }
        client.db('TIN').collection('product').insertMany(person_list);

    });

    res.json(person_list);
});

app.get('/product', function (req, res) {

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, client) {
        if (err) {
            console.log(err);
            process.exit(0);
        }

        client.db('TIN').collection('product').find({}).toArray(function(err, result) {
            res.jsonp({"data": result});
        });
    });
});

app.get('/product/:productID', function (req, res) {

    console.log(req.params.productID);
    if (!ObjectID.isValid(req.params.productID)) {
        res.status(400).send('productID not valid');
    }

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, client) {
        if (err) {
            console.log(err);
            process.exit(0);
        }

        client.db('TIN').collection('product').findOne({ _id: ObjectID(req.params.productID) }, (err, item) => {
            console.log(item);
            res.jsonp({data: item});
          })

    });
});

var server = app.listen(3000, function () { });
