var HttpDispatcher = require('httpdispatcher');
var http           = require('http');
var dispatcher     = new HttpDispatcher();


dispatcher.onGet("/:method", function(req, res) {
    console.log(req.params.method);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.params.method);
});

dispatcher.onPost("/:method[add|sub|mul|div]", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page Two');
});

http.createServer(function (req, res) {
    dispatcher.dispatch(req, res);
}).listen(3001, '0.0.0.0');