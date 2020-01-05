var HttpDispatcher = require('httpdispatcher');
var http           = require('http');
var url = require('url');
var dispatcher     = new HttpDispatcher();


dispatcher.onGet("/page1", function(req, res) {
    // console.log(req.params.method);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("page1");
});

dispatcher.onPost("/add", function(req, res) {
    compute(req, res, 'add');
});

dispatcher.onPost("/sub", function(req, res) {
    compute(req, res, 'sub');
});

dispatcher.onPost("/mul", function(req, res) {
    compute(req, res, 'mul');
});

dispatcher.onPost("/div", function(req, res) {
    compute(req, res, 'div');
});

http.createServer(function (req, res) {
    dispatcher.dispatch(req, res);
}).listen(3001, '0.0.0.0');


function compute(req, res, method) { 
    var parts = url.parse(req.url, true);
    var query = parts.query;
    var firstNumber = query.firstNumber;
    var secondNumber = query.secondNumber;
    if (!isNaN(firstNumber)){
        firstNumber = parseInt(firstNumber);
    }
    if (!isNaN(secondNumber)){
        secondNumber = parseInt(secondNumber);
    }
    if (!Number.isInteger(firstNumber)){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('First number must be int');
    }
    if (!Number.isInteger(secondNumber)){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('Second number must be int');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    if (method === 'add'){
        res.write(String(firstNumber) + " + " + String(secondNumber) + " = " + String(firstNumber + secondNumber));
    } else if (method === 'sub'){
        res.write(String(firstNumber) + " - " + String(secondNumber) + " = " + String(firstNumber - secondNumber));
    } else if (method === 'mul'){
        res.write(String(firstNumber) + " * " + String(secondNumber) + " = " + String(firstNumber * secondNumber));
    } else if (method === 'div'){
        res.write(String(firstNumber) + " / " + String(secondNumber) + " = " + String(firstNumber / secondNumber));
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write();
    }
    res.end();

 }