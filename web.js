var express = require('express');
var app = express();
var fs =require('fs');

var str=fs.readFileSync('index.html','utf8');
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
