var express = require('express');

var fs = require('fs')

var app = express.createServer(express.logger());

var buf =  fs.readFile('index.html');

var cont = buf.toString('utf8');

app.get('/', function(request, response) {
  response.send(cont);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
