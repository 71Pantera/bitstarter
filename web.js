var express = require('express');

var fs = require('fs')

var app = express.createServer(express.logger());

var buf =  fs.readFileSync("index.html").toString();

var cont = buf.toString('utf8');

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
