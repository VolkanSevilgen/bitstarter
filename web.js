var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());

var mesaj = fs.readFileSync('index.html','utf8')
console.log(mesaj);

app.get('/', function(request, response) {
  response.send(mesaj);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
